import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('terms&condition.js: GET /terms&condition');

    res.render('pages/terms&condition',{title:'Couchly | Terms and conditions',});
});

export default router;