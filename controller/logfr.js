import Users from "../models/user.js"
import bcrypt from 'bcrypt';



const signinform = (req, res) => {
    
        var query = { email: req.body.email, password: req.body.pass };
     Users.find(query)
          .then(result => {
            if (result.length > 0) {
              console.log(result[0]);
              req.session.user = result[0];
              if(req.session.user.type==='admin'){
                res.redirect('/dashboard')
              }
              else{
              res.redirect('/');
            }
            }
            else {
              res.send('invalid data')
            }
          })
        
      
          .catch(err => {
            console.log(err);
          });
      }

      
  

  export default signinform