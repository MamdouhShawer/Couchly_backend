

const customerchnagepass = async (req, res) => {

    if (req.session.user === undefined || req.session.user=== null) {

      res.render("/login", { alert: true, err: "You must login first to access this section !" });

    }
    else {
      const curr = req.session.user;
       //check passwords
      if (curr.Password == req.body.currentpassword) {

         if (req.body.newpassword == req.body.confirmPassword) {

                 curr.Password = req.body.newpassword;
       //change password
          await customers.findOneAndReplace({ Email: curr.Email }, curr);
                     console.log("password changed ");
  
          res.render("profile", { customer: req.session.user });

        }
        else {
              console.log(req.body.newpassword, req.body.confirmPassword);
        }
      }
  
      else {
          res.render("profile", { customer: req.session.user });
      }


    }



  
  }

  export default customerchnagepass;







