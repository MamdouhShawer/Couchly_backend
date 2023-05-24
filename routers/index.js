import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('index.js: GET /');

    res.render('/pages/index',{title:'Mamdouh test', message:'Mamdouh bymasi'});
});

export default router;
