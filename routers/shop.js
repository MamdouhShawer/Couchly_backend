import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('shop.js: GET /shop');

    res.render('pages/shop',{title:'Categories',});
});

export default router;