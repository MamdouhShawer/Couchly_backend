import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/',async(req,res)=>{
    console.log('beds.js: GET /beds');
    const products = await prod.find({ category: 'beds' });
    console.log(JSON.stringify({ products }))
    res.render("pages/beds.ejs",{ products,user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;