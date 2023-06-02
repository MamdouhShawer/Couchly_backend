import {Router} from 'express';

const router=Router();  

router.get('/',function(req,res){
    console.log('index.js: GET /index');

    res.render("pages/index",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;
