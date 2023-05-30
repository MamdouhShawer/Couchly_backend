import mongoose from "mongoose";
const Schema=mongoose.Schema;

const loginSchmea=new Schema({
    email:{
        type: String,
        required: true,
    },
    pass:{
        type: String,
        required: true,
    },
})
//hashing 
loginSchmea.pre('save',async function(next){
    const salt=await bcrypt.genSalt();
    this.pass=await bcrypt.hash(this.pass,salt);
    next();

});
const login=mongoose.model('login',loginSchmea);
export default login;