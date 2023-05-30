 
import login from "../models/loginn.js"

const logform= async (req,res)=>{
    

    const l = new login ({
        email: req.body.email,
        password: req.body.pass,
      });

      console.log(req.body)
   l.save()
    .then( result => {
        res.redirect("/")
    })
    .catch( err => {
        console.log(err)
    })
}


export default logform;