import mongoose from "mongoose";
const Schema=mongoose.Schema;

const products=new schema({
 image: String,
 category: String,
 description: String,
 price: String,
});
const product=mongoose.model("req",products);
export{req};

