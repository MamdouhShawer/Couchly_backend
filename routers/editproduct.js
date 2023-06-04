import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  console.log("editproduct.js: GET /editproduct");

  res.render("pages/editproduct", { title: "Couchly | editproduct" });
});

export default router;