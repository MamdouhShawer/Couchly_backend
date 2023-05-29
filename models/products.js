import mongoose from "mongoose";
const Schema=mongoose.Schema;

const productSchema=new Schema({

image:{
    type:String,
    required:true,

},
category:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
price:{
    type:String,
    required:true,
},
quantity:{
    type:String,
    required:true,

},
},{timestamps:true});



const prod=mongoose.model("product",productSchema);
export default prod;

