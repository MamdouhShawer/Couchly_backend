import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('description.js: GET /description');

    res.render("pages/description",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;