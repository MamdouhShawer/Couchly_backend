import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('index.js: GET /');

    res.render('pages/index',{title:'Home'});
});

export default router;
