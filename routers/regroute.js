import { Router } from 'express';
import  regform  from '../controller/reg.js'


const router = Router();

router.post("/",regform)



router.get('/rgestration', function(req, res, next) {
    res.send('Test Route');
  });

  export default router