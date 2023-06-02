import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('kitchens.js: GET /kitchens');

    res.render("pages/kitchens",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;