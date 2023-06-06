import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import logger from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import session from "express-session";
import fileUpload from "express-fileupload";
import Users from "./models/user.js";
import bodyParser from "body-parser";
import flash from 'connect-flash';
import nodemailer from 'nodemailer';

const dburi =
  "mongodb+srv://mamdouh:123@cluster0.w6r6q8x.mongodb.net/MyDatabase?retryWrites=true&w=majority";

/*mongoose.connect(dburi)
.then(result=>app.listen(8080,(req,res)=>{
  console.log("listning on port 8080");
}))
.catch(console.log("Connecting to database...."));*/

const app = express();

mongoose
  .connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(8080, (req, res) => {
      console.log("listning on port 8080");
    })
  )
  .catch(console.log("Connecting to database...."));

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

import terms_router from "./routers/terms&condition.js";
import wardrobe_router from "./routers/wardrobe.js";
import wish_router from "./routers/wishlist.js";
import checkroute_router from "./routers/checkroute.js";
import logroute_router from "./routers/logroute.js";
import api_router from "./routers/api.js";
import desc_router from "./routers/description.js";
import product_router from "./routers/products_route.js";
import regroute_router from "./routers/regroute.js";
import reg_router from "./routers/rgestration.js";
import signin_router from "./routers/signin.js";
import profile_router from "./routers/profile.js";
import adduser_router from "./routers/addUser.js";
import adduserroute_router from "./routers/addUserRoute.js";
import addProd_router from "./routers/addProduct.js";
import dash_router from "./routers/dashboard.js";
import removeuser_router from "./routers/removeUser.js";
import mystore_router from "./routers/myStore.js";
import logout_router from "./routers/logout.js";
import editprod_router from"./routers/editproduct.js";
import addtocart_router from "./routers/addtocart.js";
import deletfromcart_router from "./routers/deletefromcart.js";

 
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
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "Your_Secret_Key" }));
app.use(flash());

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
 app.use('/terms&condition', terms_router);
 app.use('/wardrobe', wardrobe_router);
 app.use('/wishlist', wish_router);
 app.use('/checkform',checkroute_router);
 app.use('/logform',logroute_router);
 app.use('/api',api_router);
 app.use('/description',desc_router);
 app.use('/prodform',product_router);
 app.use('/regform',regroute_router);
 app.use('/rgestration', reg_router);
 app.use('/signinform',signin_router);
 app.use('/profile',profile_router);
 app.use('/dashboard',dash_router);
 app.use('/addProduct',addProd_router);
 app.use('/adduser',adduser_router);
 app.use('/myStore',mystore_router);
 app.use('/removeuser',removeuser_router);
 app.use('/logout',logout_router);
 app.use('/userForm',adduserroute_router);
 app.use('/editproduct',editprod_router);
 app.use('/addtocart',addtocart_router);
 app.use('/deletefromcart',deletfromcart_router);

 app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/myStore/edit", editprod_router);

//session
app.get("/", (req, res, next) => {
  res.render("index", {
    user: req.session.user === undefined ? "" : req.session.user,
  });
});

app.get("/login", (req, res, next) => {
  res.render("login", {
    user: req.session.user === undefined ? "" : req.session.user,
  });
});

export default app;
