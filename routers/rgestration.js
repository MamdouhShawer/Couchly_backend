import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('rgestration.js: GET /rgestration');

    res.render("pages/rgestration",{ user: (req.session.user === undefined ? "" : req.session.user) });

});

export default router;