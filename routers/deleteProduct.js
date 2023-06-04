import { Router } from "express";
import prod from "../models/products.js";
import deleteProd from "../controller/deleteproduct.js";

const router = Router();

router.get("/", (req, res) => {
  console.log("myStore.js: GET /myStore");
  prod.find()
    .then((result) => {
      res.render("pages/myStore", {
        prod: result,
        title: "Couchly | myStore",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Add the route for deleteUser
router.delete("/delete/:id", deleteProd);

export default router;
