import mongoose from "mongoose";
const Schema=mongoose.Schema;

const loginSchmea=new Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
})
const login=mongoose.model("login",loginSchmea)
export default login