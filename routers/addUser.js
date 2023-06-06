import { Router } from "express";

const router = Router();

router.get('/',function(req,res){
  if (req.session.user !== undefined && req.session.user.type === 'admin') {
      console.log('addUser.js: GET /addUser');

      res.render("pages/addUser",{ user: (req.session.user === undefined ? "" : req.session.user) },{ title: "Couchly | Add user" });
  }
  else {
      res.render('pages/err', { err: "You are not an admin ,  you can't access this page ", user: (req.session.user === undefined ? "" : req.session.user) })
  }
});

export default router;
