import {Router} from 'express';

import regform from '../controller/reg.js';
const router=Router();
router.post('/',regform)

/* GET /about/test page. */
router.get('/', function(req, res) {
    res.render('pages/index',{title:'Regestration'});
  });

export default router;