import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('L-shape.js: GET /L-shape');

    res.render("pages/L-shape",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;