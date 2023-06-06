import {Router} from 'express';

import prodform from '../controller/addProd.js';
const router=Router();


/* GET /about/test page. */
router.get('/', function(req, res) {
    res.render('pages/addProduct',{title:'Add Product'});
  });
router.post('/',prodform)
export default router;