import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('dashboard.js: GET /dashboard');

    res.render('pages/dashboard',{title:'Couchly | Dashboard',});
});

export default router;