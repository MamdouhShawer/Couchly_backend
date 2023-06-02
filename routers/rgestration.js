import {Router} from 'express';
import User from "../controller/User.js";
const router=Router();

router.get('/',function(req,res){
    console.log('rgestration.js: GET /rgestration');

    res.render('pages/rgestration',{title:'Couchly | Registeration',});
});

router.post('/checkUN',User.checkUN);
export default router;