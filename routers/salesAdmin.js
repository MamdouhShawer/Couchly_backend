import { Router } from "express";
import prod from "../models/products.js"

const router = Router();

router.get("/", function (req, res) {
  console.log("saleAdmin.js: GET /salesAdmin");

  res.render("pages/saleAdmin", { title: "Couchly | salesAdmin" });

});


export default router;
