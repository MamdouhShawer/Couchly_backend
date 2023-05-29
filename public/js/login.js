app.post("/login",async(req,res)=>{

try{
    const check=await login.findOne({email:req.body.email})

    if(check.password==req.body.password){
        res.render("index")
    }
    else{
        res.send("wrong password")
    }

}
catch{
    res.send("wrong details")
}

})