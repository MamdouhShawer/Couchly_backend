import { Router } from "express";
import deleteUser from "../controller/Removeuser.js";
const router = Router();
import prod from "../models/products.js"
import deleteProd from "../controller/deleteproduct.js";


router.get('/', function(req, res, next) {
  var query ={ category: "beds" };
  var query1={ category: "couches" };
  var query2={ category: "kitchens" };
  var query3={ category: "L-shape" };
  var query4={ category: "desks" };
  var query5={ category: "decors" };
  var query6={ category: "chairs" };
  var query7={ category: "cupboards" };

  Promise.all([
    prod.find(query),
    prod.find(query1),
    prod.find(query2),
    prod.find(query3),
    prod.find(query4),
    prod.find(query5),
    prod.find(query6),
    prod.find(query7)

    
  ])
    .then(([result1,result2,result3,result4,result5,result6,result7,result8]) => {
      
      res.render("pages/myStore", { product: result1 , product1:result2 ,product2:result3, product3:result4, product4:result5, product5:result6, product6:result7, product7:result8, user: (req.session.user === undefined ? "" : req.session.user) });
    })
    
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
});

router.get("/", (req, res) => {
  console.log("myStore.js: GET /myStore");
  Users.find()
    .then((result) => {
      res.render("pages/myStore", {
        Users: result,
        title: "Couchly | myStore",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.delete("/delete/:id", deleteProd);


export default router
