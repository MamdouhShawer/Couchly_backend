import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('kitchens.js: GET /kitchens');

    res.render('pages/kitchens',{title:'Couchly | Kitchens',});
});

export default router;