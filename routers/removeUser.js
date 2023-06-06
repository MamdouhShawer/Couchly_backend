import { Router } from "express";
import collectFunctions from "../controller/Removeuser.js";
import searchUser from "../controller/searchUser.js";

const router = Router();

router.get("/", collectFunctions.paging);


router.get('/',function(req,res){
  if (req.session.user !== undefined && req.session.user.type === 'admin') {
      console.log('removeUser.js: GET /removeUser');

      res.render("pages/removeUser",{ user: (req.session.user === undefined ? "" : req.session.user) },{ title: "Couchly | Customers" });
  }
  else {
      res.render('pages/err', { err: "You are not an admin ,  you can't access this page ", user: (req.session.user === undefined ? "" : req.session.user) })
  }
});



// Add the route for deleteUser
router.delete("/delete/:id", collectFunctions.deleteUser);
router.get("/search", searchUser);
export default router;
