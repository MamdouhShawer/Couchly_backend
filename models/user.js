import mongoose, { Schema as _Schema, model } from 'mongoose';

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
confirmPassword:{
    type:String,
    required:true,
},
type:{
    type: String,
    required: true,
},
},{timestamps:true});


const Users=newFunction();
export default Users;

function newFunction() {
    return model('Users', usersSchmea);
}
