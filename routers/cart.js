import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('cart.js: GET /cart');

    res.render("pages/cart",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;