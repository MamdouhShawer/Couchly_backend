import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('privacyPolicy.js: GET /privacyPolicy');

    res.render("pages/privacyPolicy",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;