import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('api.js: GET /api');

    res.render('pages/api',{title:'map'});
});

export default router;