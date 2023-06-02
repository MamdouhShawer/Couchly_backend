import prod from "../models/products.js"

const prodform= async (req,res)=>{
    

    const pr = new prod ({
        name:req.body.ProductName,
        category:req.body.ProductCategory,
        quantity:req.body.quantity,
        price:req.body.price,
        description:req.body.description,
        image:req.body.image,
      });

      console.log(req.body)
   pr.save()
    .then( result => {
        res.redirect("/")
    })
    .catch( err => {
        console.log(err)
    })
}


export default prodform;