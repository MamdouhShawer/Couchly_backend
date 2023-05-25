import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('beds.js: GET /beds');

    res.render('pages/beds',{title:'Couchly | Beds',});
});

export default router;