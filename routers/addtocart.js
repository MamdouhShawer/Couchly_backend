import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/', async (req, res) => {
    try {
      const product = await prod.findById(req.query.id);
      if (!product) {
        return res.status(404).send(`Product not found for ID: ${req.query.id}`);
      }
  
      // Get the quantity chosen by the user from the query parameter
      const quantity = parseInt(req.query.quantity) || 1;
  
      // Initialize cart to an empty array if it is undefined
      if (!req.session.cart) {
        req.session.cart = [];
      }
  
      // Add product to cart
      let cart = req.session.cart;
      let newItem = true;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === product.name) {
          cart[i].quantity += quantity;
          newItem = false;
          break;
        }
      }
      if (newItem) {
        cart.push({
          name: product.name,
          category: product.category,
          quantity: quantity,
          price: product.price,
          description: product.description,
          image: product.image
        });
      }
      console.log(req.session.cart);
      res.redirect('cart');
    } catch (error) {
      console.error(error.message);
      res.redirect('pages/categories');
    }
  });

export default router;