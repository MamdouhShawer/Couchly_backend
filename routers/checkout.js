import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('checkout.js: GET /checkout');

    res.render("pages/checkout",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;