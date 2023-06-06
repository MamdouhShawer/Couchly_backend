/*
import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    if (req.session.user !== undefined && req.session.user.type === 'user') {
        console.log('wish.js: GET /wish');

        res.render("pages/wish",{ user: (req.session.user === undefined ? "" : req.session.user) });
    }
    else {
        res.render('pages/err', { err: "You are not user ,  you can't access this page ", user: (req.session.user === undefined ? "" : req.session.user) })
    }
});


export default router;
*/