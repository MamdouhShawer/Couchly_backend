import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  console.log("removeProduct.js: GET /removeProduct");

  res.render("pages/removeProduct", { title: "Couchly | removeProduct" });
});

export default router;
