import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/',async(req,res)=>{
    console.log('coach.js: GET /coach');
    const products = await prod.find({ category: 'couches' });
    console.log(JSON.stringify({ products }))
    res.render("pages/coach",{ products,user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;