import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('coach.js: GET /coach');

    res.render("pages/coach",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;