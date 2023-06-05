import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/',async(req,res)=>{
    console.log('L-shape.js: GET /L-shape');
    const products = await prod.find({ category: 'L-shape' });
    console.log(JSON.stringify({ products }))
    res.render("pages/L-shape",{ products,user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;