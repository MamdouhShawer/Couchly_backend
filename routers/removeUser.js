import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  console.log("removeUser.js: GET /removeUser");

  res.render("pages/removeUser", { title: "Couchly | removeUser" });
});

export default router;
