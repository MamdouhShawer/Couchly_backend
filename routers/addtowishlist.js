import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/', async (req, res) => {
    try {
      const product = await prod.findById(req.query.id);
      if (!product) {
        return res.status(404).send(`Product not found for ID: ${req.query.id}`);
      }
  

  
      
      if (!req.session.wishlist) {
        req.session.wishlist = [];
      }
  
    

      let wishlist= req.session.wishlist;
      let newItem = true;
      for (let i = 0; i < wishlist.length; i++) {
        if (wishlist[i].name === product.name) {
         newItem = false;
         
          break;
        }
      }
      if (newItem) {
        wishlist.push({
          name: product.name,
          category: product.category,
          quantity: quantity,
          price: product.price,
          description: product.description,
          image: product.image
        });
      }
      console.log(req.session.wishlist);
      res.redirect('wishlist');
    } 
    catch (error) {
      console.error(error.message);
      res.redirect('categories');
    }
  });


export default router;