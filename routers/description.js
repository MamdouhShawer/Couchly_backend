import { Router } from 'express';
import Product from '../models/products.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const product = await Product.findById(req.query.id);
        if (!product) {
            return res.status(404).send(`Product not found for ID: ${req.query.id}`);
          }
        res.render('pages/description', { product, user: (req.session.user === undefined ? "" : req.session.user)});
      } catch (err) {
        console.error(err);
        res.status(500).send(`Server Error: ${err.message}`);
      }
    });
export default router;