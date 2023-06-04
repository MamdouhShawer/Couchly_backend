import { Router } from "express";
import userForm from "../controller/addU.js";
const router = Router();

router.get("/", function (req, res) {
  console.log("addUser.js: GET /addUser");

  res.render("pages/addUser", { title: "Couchly | addUser" });
});

export default router;
