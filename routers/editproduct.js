import { Router } from "express";

import editProduct from "../controller/editproduct.js";

const router = Router();

router.get("/", function (req, res) {
  console.log("editproduct.js: GET /editproduct");

  res.render("pages/editproduct", { title: "Couchly | editproduct" });
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prod.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.render("pages/editproduct", { title: "Couchly | editproduct", product });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve product" });
  }
});

router.get("/edit/:id", editProduct);

router.post("/edit/:id", editProduct);

export default router;