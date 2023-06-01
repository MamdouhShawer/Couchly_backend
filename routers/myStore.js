import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  console.log("myStore.js: GET /myStore");

  res.render("pages/myStore", { title: "Couchly | myStore" });
});

export default router;
