import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('login.js: GET /login');

    res.render('pages/login',{title:'Couchly | Login',});
});

export default router;