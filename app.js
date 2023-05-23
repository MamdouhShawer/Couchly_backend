import express from 'express';
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import Users from './models/user.js';
const dburi="mongodb+srv://mamdouh:123@cluster0.w6r6q8x.mongodb.net/MyDatabase?retryWrites=true&w=majority";

mongoose.connect(dburi)
.then(result=>app.listen(8080,(req,res)=>{
  console.log("listning on port 8080");
}))
.catch(console.log("error"));
//import routers
import index_router from "./routers/index.js";


// Read the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

 const app = express();

 app.use('/', index_router);
 app.use(express.static(path.join(__dirname, 'public')))


 app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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




