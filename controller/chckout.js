import check from "../models/chckout.js"

const checkform= async (req,res)=>{
    

    const ch = new check ({
        FirstName: req.body.Fname,
        LastName: req.body.Lname,
        phoneNum: req.body.phone,
        Adress: req.body.adress,
        CardName: req.body.c,
        CardNum: req.body.card,
        ExpDate: req.body.date,
        CVC: req.body.cvc,
      });

      console.log(req.body)
   ch.save()
    .then( result => {
        res.redirect("/")
    })
    .catch( err => {
        console.log(err)
    })
}


export default checkform;