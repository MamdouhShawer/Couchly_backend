import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('profile.js: GET /profile');

    res.render("pages/profile",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;