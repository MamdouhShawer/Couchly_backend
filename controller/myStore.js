import prod from "../models/products.js";

/*
const searchProducts = async (req, res) => {
  const { category } = req.query;
  let query = {};

  if (category) {
    query = { category };
  }

  try {
    const products = await prod.find(query);
    res.render("pages/displaysearchprod", { title: "My Store", product: products });
  } catch (error) {
    res.status(500).json({ message: "Failed to search products" });
  }
};


router.get('/', function(req, res, next) {

  
      .then(([result1,result2,result3,result4,result5,result6,result7,result8]) => {
        
        res.render("pages/myStore", { product: result1 , product1:result2 ,product2:result3, product3:result4, product4:result5, product5:result6, product6:result7, product7:result8, user: (req.session.user === undefined ? "" : req.session.user) });
      })
      
      .catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
      });
  });
  */
 
  const searchProducts = async (req, res) => {
    var query ={ category: req.query.category };
    // var query1={ category: "couches" };
    // var query2={ category: "kitchens" };
    // var query3={ category: "L-shape" };
    // var query4={ category: "desks" };
    // var query5={ category: "decors" };
    // var query6={ category: "chairs" };
    // var query7={ category: "cupboards" };
  
    
      
    Promise.all([
        prod.find(query)
    
        
      ])
    
      .then((result) => {
        
        res.render("pages/displaysearchprod",{ product: result ,user: (req.session.user === undefined ? "" : req.session.user) });
      })
    try {
      const products = await prod.find(query);
      res.render("pages/displaysearchprod", { title: "My Store", product: products });
    } catch (error) {
      res.status(500).json({ message: "Failed to search products" });
    }
  };
export default searchProducts