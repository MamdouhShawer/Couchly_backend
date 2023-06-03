import { Router } from "express";
import Users from "../models/user.js";
const router = Router();

router.get("/", function (req, res) {
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

export default router;
