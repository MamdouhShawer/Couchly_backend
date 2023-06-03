import Users from "../models/user.js"
import bcrypt from 'bcrypt';



const signinform = (req, res) => {
    
        var query = { email: req.body.email, password: req.body.pass };
     Users.find(query)
          .then(result => {
            if (result.length > 0) {
              console.log(result[0]);
              req.session.user = result[0];
              res.render('pages/index', { userP: result[0], user: (req.session.user === undefined ? "" : req.session.user) });
            }
            else {
              res.send('invalid data')
            }
          })
          .catch(err => {
            console.log(err);
          });
      };

      
  

  export default signinform