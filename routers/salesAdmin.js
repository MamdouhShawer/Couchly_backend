import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  console.log("salesAdmin.js: GET /salesAdmin");

  res.render("pages/salesAdmin", { title: "Couchly | salesAdmin" });
});

export default router;
