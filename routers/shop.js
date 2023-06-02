import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('shop.js: GET /shop');

    res.render("pages/shop",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;