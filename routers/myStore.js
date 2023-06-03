import { Router } from "express";

const router = Router();
import prod from "../models/products.js"

router.get('/', function(req, res, next) {
  var query = { category: "beds" };
  Promise.all([
    prod.find(query)
    
  ])
    .then(([result1]) => {
      
      res.render("pages/myStore", { product: result1 , user: (req.session.user === undefined ? "" : req.session.user) });
    })
    
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
})
   


export default router
