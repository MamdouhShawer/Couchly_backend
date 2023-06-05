import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/',async(req,res)=>{
    console.log('kitchens.js: GET /kitchens');
    const products = await prod.find({ category: 'kitchens' });
    console.log(JSON.stringify({ products }))
    res.render("pages/kitchens.ejs",{ products,user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;