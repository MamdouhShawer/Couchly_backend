import mongoose from "mongoose";
const Schema=mongoose.Schema;

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
image:{
    type: String,
    required: true,
},
type:{
    type: String,
    required: true,
},
},{timestamps:true});

const Users=mongoose.model('Users',usersSchmea);
export default Users;