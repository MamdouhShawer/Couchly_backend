import prod from "../models/products.js"
import path from 'path'

const prodform= async (req,res)=>{
    
    let imgFile;
    let uploadPath;
    console.log(req.files)
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    imgFile = req.files.img;
    uploadPath = __dirname + '../public/imgs/' + req.body.ProductCategory + path.extname(imgFile.name);
    // Use the mv() method to place the file somewhere on your server
    imgFile.mv(uploadPath, function (err) {
      if (err)
        return res.status(500).send(err);
    }); 
    
    const pr = new prod ({
        name:req.body.ProductName,
        category:req.body.ProductCategory,
        quantity:req.body.quantity,
        price:req.body.price,
        description:req.body.description,
        image:req.body.ProductCategory + path.extname(imgFile.name),
      });

  
   pr.save()
    .then( result => {
        res.redirect("/")
    })
    .catch( err => {
        console.log(err)
    });
}


export default prodform;