import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('L-shape.js: GET /L-shape');

    res.render('pages/L-shape',{title:'Couchly | L-Shape',});
});

export default router;