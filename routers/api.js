import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('api.js: GET /api');

    res.render("pages/api",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;