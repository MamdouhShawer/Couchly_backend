import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('wishlist.js: GET /wishlist');

    res.render('pages/wishlist',{title:'Couchly | Wishlist',});
});

export default router;