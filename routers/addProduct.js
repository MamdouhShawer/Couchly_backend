import { Router } from "express";

const router = Router();

router.get('/',function(req,res){
  if (req.session.user !== undefined && req.session.user.type === 'admin') {
      console.log('addProduct.js: GET /addProduct');

      res.render("pages/addProduct",{ user: (req.session.user === undefined ? "" : req.session.user) },{ title: "Couchly | Add product" });
  }
  else {
      res.render('pages/err', { err: "You are not an admin ,  you can't access this page ", user: (req.session.user === undefined ? "" : req.session.user) })
  }
});

export default router;
