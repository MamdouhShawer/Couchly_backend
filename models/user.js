import mongoose, { Schema as _Schema, model } from 'mongoose';
import bcrypt from "bcrypt";
const Schema=_Schema;

const usersSchmea=new Schema({
Firstname:{
    type: String,
    required: true,
},
Lastname:{
    type: String,
    required: true,
},
Username:{
    type: String,
    required: true,
},
email:{
    type: String,
    required: true,
},
password:{
    type: String,
    required: true,
},
type:{
    type: String,
    required: true,
},
confirmPassword:{
    type:String,
    required:true,
},
},{timestamps:true});

//hashing the password
usersSchmea.pre('save',async function(next){
   const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    this.confirmPassword=await bcrypt.hash(this.confirmPassword,salt);
     next();

});

//const Users=newFunction();

function newFunction() {
    return model('Users', usersSchmea);
}
const Users=mongoose.model('user',usersSchmea);

export default Users