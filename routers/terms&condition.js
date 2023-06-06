import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('terms&condition.js: GET /terms&condition');

    res.render("pages/terms&condition",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;