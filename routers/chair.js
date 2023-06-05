import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/',async(req,res)=>{
    console.log('chair.js: GET /chair');
    const products = await prod.find({ category: 'chairs' });
    console.log(JSON.stringify({ products }))
    res.render("pages/chair",{ products,user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;