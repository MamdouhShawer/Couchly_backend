import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('privacyPolicy.js: GET /privacyPolicy');

    res.render('pages/privacyPolicy',{title:'Couchly | Privacy and policy',});
});

export default router;