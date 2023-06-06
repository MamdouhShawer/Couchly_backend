import {Router} from 'express';
import prod from '../models/products.js';
const router=Router();  

router.get('/',function(req,res){
    console.log('index.js: GET /index');

    res.render("pages/index",{ user: (req.session.user === undefined ? "" : req.session.user) });
});
router.post('/searchProduct',async(req,res)=>{
    let input=req.body.input.trim();
    let search= await prod.find({name:{$regex: new RegExp('^'+input+'.*','i')}}).exec();
    //Limit search results to 10
    search=search.slice(0,10);
    res.send({input: search});
});
export default router;
