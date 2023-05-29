import {Router} from 'express';

import logform from '../controller/chckout.js';
const router=Router();
router.post('/',checkform)

/* GET /about/test page. */
router.get('/', function(req, res) {
    res.render('pages/checkout',{title:'Complete your purchase'});
  });

export default router;