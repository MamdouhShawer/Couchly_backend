import mongoose from "mongoose";
const Schema=mongoose.Schema;

const checkSchmea=new Schema({
fn:{
    type: String,
    required: true,
},
ln:{
    type: String,
    required: true,
},
phoneNum:{
    type:Number,
    required:true,
},
Adress:{
    type: String,
    required: true,
},
CardName:{
    type: String,
    required: true,
},
CardNum:{
    type: Number,
    required: true,
},
ExpDate:{
    type:Date,
    required:true,
},
CVC:{
    type: Number,
    required: true,
},
},{timestamps:true});

const check=mongoose.model('Checkout',checkSchmea);
export default check;