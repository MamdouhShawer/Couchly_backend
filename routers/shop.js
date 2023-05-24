import {Router} from 'express';

const router=Router();

router.get('/shop',function(req,res){
    console.log('shop.js: GET /shop');

    res.render('/pages/shop',{title:'Mamdoouh',});
});

export default router;