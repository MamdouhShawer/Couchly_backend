import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/', async (req, res) => {
    try {
      const product = await prod.findById(req.query.id);
      if (!product) {
        return res.status(404).send(`Product not found for ID: ${req.query.id}`);
      }
  
      // Initialize cart to an empty array if it is undefined
      if (!req.session.cart) {
        req.session.cart = [];
      }
  
      // Add product to cart
      let cart = req.session.cart;
      let newItem = true;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === product.name) {
          cart[i].quantity++;
          newItem = false;
          break;
        }
      }
      if (newItem) {
        cart.push({
          name: product.name,
          category: product.category,
          quantity: 1,
          price: product.price,
          description: product.description,
          image: product.image
        });
      }
      console.log(req.session.cart);
      req.flash('success', 'Product added to cart');
      res.redirect('cart');
    } catch (error) {
      console.error(error.message);
      req.flash('error', 'An error occurred');
      res.redirect('pages/categories');
    }
  });

export default router;