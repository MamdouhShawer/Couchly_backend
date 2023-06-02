import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('sale.js: GET /sale');

    res.render("pages/sale",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;