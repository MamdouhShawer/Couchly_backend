import { Router } from 'express';
import Product from '../models/products.js';

const router = Router();

router.get('/', async (req, res) => {
  const productId = req.query.id;

  if (!productId) {
    return res.status(400).send('Product ID is required.');
  }

  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).send(`Product with ID '${productId}' not found.`);
  }

  const cart = req.session.cart || [];
  const itemIndex = cart.findIndex(item => item.productId === productId);

  if (itemIndex === -1) {
    return res.status(404).send(`Item with product ID '${productId}' not found in cart.`);
  }

  cart.splice(itemIndex, 1);
  req.session.cart = cart;

  // Redirect the user back to the previous page
  const referer = req.headers.referer;
  if (referer) {
    res.redirect(referer);
  } else {
    res.redirect('/');
  }
});

export default router;