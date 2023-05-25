import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('wardrobe.js: GET /wardrobe');

    res.render('pages/wardrobe',{title:'Couchly | Wardrobes',});
});

export default router;