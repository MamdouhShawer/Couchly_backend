import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  console.log("addProduct.js: GET /addProduct");

  res.render("pages/addProduct", { title: "Couchly | addProduct" });
});

export default router;
