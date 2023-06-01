import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema=mongoose.Schema;


const checkSchmea=new Schema({
FirstName:{
    type: String,
   // required: true,
},
LastName:{
    type: String,
  //  required: true,
},
phoneNum:{
    type:Number,
   // required:true,
   // unique:true,
   // minlength:[11,'Please enter a valid phone number'],
},
Adress:{
    type: String,
    //required: true,
},
CardName:{
    type: String,
  //  required: true,
  //  unique:true,
},
CardNum:{
    type: String,
   // required: true,
  //  unique:true,
   // minlength:[16,'Please enter a valid card number'],
},
ExpDate:{
    type:String,
   // required:true,
},
CVC:{
    type: String,
   // required: true,
   // unique:true,
   // minlength:[3,'Please enter a valid CVC'],
},
},{timestamps:true});


//hashing the card number and cvc
checkSchmea.pre('save',async function(next){
    const salt=await bcrypt.genSalt();
    this.CardNum=await bcrypt.hash(this.CardNum,salt);
    this.CVC=await bcrypt.hash(this.CVC,salt);
    next();

});

const check=mongoose.model('Checkout',checkSchmea);
export default check;