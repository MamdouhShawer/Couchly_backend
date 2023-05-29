import express from 'express';
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import logger from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import Users from './models/user.js';
import prod from './models/products.js'
const dburi="mongodb+srv://mamdouh:123@cluster0.w6r6q8x.mongodb.net/MyDatabase?retryWrites=true&w=majority";

/*mongoose.connect(dburi)
.then(result=>app.listen(8080,(req,res)=>{
  console.log("listning on port 8080");
}))
.catch(console.log("Connecting to database...."));*/

const app = express();


mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(8080,(req,res)=>{
    console.log("listning on port 8080");
  }))
  .catch(console.log("Connecting to database...."));

 app.use(express.urlencoded({ extended: true }));


//import routers
import index_router from "./routers/index.js";
import shop_router from "./routers/shop.js";
import about_router from "./routers/about.js";
import beds_router from "./routers/beds.js";
import cart_router from "./routers/cart.js";
import chair_router from "./routers/chair.js";
import checkout_router from "./routers/checkout.js";
import couch_router from "./routers/coach.js";
import decor_router from "./routers/decor.js";
import desks_router from "./routers/desks.js";
import kitchens_router from "./routers/kitchens.js";
import Lshape_router from "./routers/L-shape.js";
import Login_router from "./routers/login.js";
import priv_router from "./routers/privacyPolicy.js";
import reg_router from "./routers/rgestration.js";
import sale_router from "./routers/sale.js";
import terms_router from "./routers/terms&condition.js";
import wardrobe_router from "./routers/wardrobe.js";
import wish_router from "./routers/wishlist.js";
import checkroute_router from "./routers/checkroute.js"
import logroute_router from "./routers/logroute.js"




// Read the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



 // View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


 // Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


 app.use('/', index_router);
 app.use('/shop', shop_router);
 app.use('/about', about_router);
 app.use('/beds', beds_router);
 app.use('/cart', cart_router);
 app.use('/chair', chair_router);
 app.use('/checkout', checkout_router);
 app.use('/coach', couch_router);
 app.use('/decor', decor_router);
 app.use('/desks', desks_router);
 app.use('/kitchens', kitchens_router);
 app.use('/L-shape', Lshape_router);
 app.use('/login', Login_router);
 app.use('/privacyPolicy', priv_router);
 app.use('/rgestration', reg_router);
 app.use('/sale', sale_router);
 app.use('/terms&condition', terms_router);
 app.use('/wardrobe', wardrobe_router);
 app.use('/wishlist', wish_router);
 app.use('/checkform',checkroute_router);
 app.use('/logform',logroute_router);

 /*
  app.get('/add',(req,res)=>{
  const user=new Users({
    Firstname:"Mamdouh",
    Lastname:"SHAWER",
    Username:"Ayhaga",
    email:"mamdouh@gmail.com",
    password:"123",
    image:"mamdouh",
    type:"admin"
  })

  user.save();
 /* .then(result=>{
    res.send(result);
  })
  .catch(err=>{
    console.log(err);
  });*/


/*
app.get('/add',(req,res)=>{
  //const signup =new Signup(req.body)
    

    const user = new Users ({
      Firstname: req.body.first,
      Lastname: req.body.last,
      Username: req.body.username,
      email: req.body.email,
      password: req.body.pass,
      confirmPassword: req.body.pass2,
      type:req.body.type,
      });

      console.log(req.body)
   user.save()
    .then( result => {
        res.redirect("/")
    })
    .catch( err => {
        console.log(err)
    })
});

*/
/*
app.get('/addProduct',(req,res)=>{
  const products =new prod({
    image:"rana",
    category:"beds",
    description:"ayhaga",
    price:"12LE",
    quantity:"12"

  })

  products.save()
  .then(result=>{
    res.send(result);
  })
  .catch(err=>{
    console.log(err);
  });

});


// Error handling
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('pages/error');
});
*/


export default app;