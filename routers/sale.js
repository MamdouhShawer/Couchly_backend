import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('sale.js: GET /sale');

    res.render('pages/sale',{title:'Couchly | Sale',});
});

export default router;