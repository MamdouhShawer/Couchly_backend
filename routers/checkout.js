import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('checkout.js: GET /checkout');

    res.render('pages/checkout',{title:'Complete your purchase'});
});

export default router;