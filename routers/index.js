import {Router} from 'express';
import search from "../controller/searchproduct.js";

const router=Router();  

router.get('/',function(req,res){
    console.log('index.js: GET /index');

    res.render("pages/index",{ user: (req.session.user === undefined ? "" : req.session.user) });
});
router.post('/searchProduct',search.searchProduct);
export default router;
