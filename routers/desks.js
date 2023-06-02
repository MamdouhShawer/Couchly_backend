import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('desks.js: GET /desks');

    res.render("pages/desks",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;