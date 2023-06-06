import prod from "../models/products.js";

const searchProducts= async (req, res) => {
  var query ={category:req.query.query};
  console.log(query)
  prod.find(query)
     .then(result=>{
        console.log(result)
        return res.render("pages/displaysearchprod", { title: "My Store", product :result });

     })
     .catch(error=> {
           res.status(500).json({ message:error });
         })
  };

  
export default searchProducts