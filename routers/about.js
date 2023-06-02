import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('about.js: GET /about');

    res.render("pages/about",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;