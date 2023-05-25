import express from 'express';
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import logger from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import Users from './models/user.js';
const dburi="mongodb+srv://mamdouh:123@cluster0.w6r6q8x.mongodb.net/MyDatabase?retryWrites=true&w=majority";

mongoose.connect(dburi)
.then(result=>app.listen(8080,(req,res)=>{
  console.log("listning on port 8080");
}))
.catch(console.log("Connecting to database...."));


//import routers
import index_router from "./routers/index.js";
import shop_router from "./routers/shop.js";


// Read the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


 const app = express();

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


  app.get('/add',(req,res)=>{
  const user=new Users({
    Firstname:"Mamdouh",
    Lastname:"Shawer",
    Username:"Ayhaga",
    email:"mamdouh@gmail.com",
    password:"123",
    image:"mamdouh",
    type:"admin"
  })

  user.save()
  .then(result=>{
    res.send(result);
  })
  .catch(err=>{
    console.log(err);
  });
});




export default app;