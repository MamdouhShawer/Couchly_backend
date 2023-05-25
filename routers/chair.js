import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('chair.js: GET /chair');

    res.render('pages/chair',{title:'Couchly | Chairs',});
});

export default router;