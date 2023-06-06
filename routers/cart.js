import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    const cartItems = req.session.cart || [];
    if (req.session.user !== undefined && req.session.user.type === 'user') {
        console.log('cart.js: GET /cart');

        res.render("pages/cart",{ cartItems,user: (req.session.user === undefined ? "" : req.session.user) });
    }
    else {
        res.render('pages/err', { err: "You are not user ,  you can't access this page ", user: (req.session.user === undefined ? "" : req.session.user) })
    }
});

export default router;