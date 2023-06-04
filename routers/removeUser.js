import { Router } from "express";
import Users from "../models/user.js";
import deleteUser from "../controller/Removeuser.js";

const router = Router();

router.get("/", (req, res) => {
  console.log("removeUser.js: GET /removeUser");
  Users.find()
    .then((result) => {
      res.render("pages/removeUser", {
        Users: result,
        title: "Couchly | removeUser",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Add the route for deleteUser
router.delete("/delete/:id", deleteUser);

export default router;
