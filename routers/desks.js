import {Router} from 'express';
import prod from "../models/products.js";

const router=Router();

router.get('/',async(req,res)=>{
    console.log('desks.js: GET /desks');
    const products = await prod.find({ category: 'desks' });
    console.log(JSON.stringify({ products }))
    res.render("pages/desks.ejs",{ products,user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;
