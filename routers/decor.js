import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('decor.js: GET /decor');

    res.render('pages/decor',{title:'Couchly | Decor',});
});

export default router;