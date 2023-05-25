import {Router} from 'express';

const router=Router();

router.get('/',function(req,res){
    console.log('about.js: GET /about');

    res.render('pages/about',{title:'Couchly | About',});
});

export default router;