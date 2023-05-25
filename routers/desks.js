import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('desks.js: GET /desks');

    res.render('pages/desks',{title:'Couchly | Desks',});
});

export default router;