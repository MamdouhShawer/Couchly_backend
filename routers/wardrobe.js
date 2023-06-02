import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('wardrobe.js: GET /wardrobe');

    res.render("pages/wardrobe",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;