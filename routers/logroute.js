import {Router} from 'express';

import logform from '../controller/logfr.js';
const router=Router();
router.post('/',logform)

/* GET /about/test page. */
router.get('/', function(req, res) {
    res.render('pages/login',{title:'login form'});
  });

export default router;