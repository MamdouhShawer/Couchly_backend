import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('cart.js: GET /cart');

    res.render('pages/cart',{title:'Couchly | Cart',});
});

export default router;