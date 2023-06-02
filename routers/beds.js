import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('beds.js: GET /beds');

    res.render("pages/beds",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;