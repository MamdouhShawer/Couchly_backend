import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/',async(req,res)=>{
    console.log('decor.js: GET /decor');
    const products = await prod.find({ category: 'decors' });
    console.log(JSON.stringify({ products }))
    res.render("pages/decor",{ products,user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;