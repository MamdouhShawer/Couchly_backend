import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('wishlist.js: GET /wishlist');

    res.render("pages/wishlist",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;