import Users from "../models/user.js"


const regform= async (req,res)=>{
    

    const reg = new Users ({
        Firstname:req.body.first,
        Lastname:req.body.last,
        Username:req.body.un,
        email:req.body.email,
        password:req.body.pass,
        confirmPassword:req.body.Cpass,

        type:"user",
      });

      console.log(req.body)
   reg.save()
    .then( result => {
        res.redirect("/login")
    })
    .catch( err => {
        console.log(err)
    })
}


export default regform;