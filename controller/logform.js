import log from "../models/logform.js"

const logform= async (req,res)=>{
    

    const l = new log ({
        email: req.body.email,
        password: req.body.password,
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