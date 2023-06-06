import { Router } from "express";

const router = Router();

router.get('/', function(req, res, next) {
  if (req.session && req.session.user && req.session.user.type === 'admin') {
    res.render("pages/addProduct",{ user: (req.session.user === undefined ? "" : req.session.user) });
  }
  else{
    res.render('pages/err', { err: "You are not admin ,  you can't access this page ", user: (req.session.user === undefined ? "" : req.session.user) })
  }
});

export default router;
