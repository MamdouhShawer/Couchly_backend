
import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/',async(req,res)=>{
    console.log('wardrobe.js: GET /wardrobe');
    const products = await prod.find({ category: 'cupboards' });
    console.log(JSON.stringify({ products }))
    res.render("pages/wardrobe",{ products,user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;