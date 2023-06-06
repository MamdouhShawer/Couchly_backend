import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  console.log("forgetpass.js: GET /forgetpass");

  res.render("pages/", {  });
});

export default router;