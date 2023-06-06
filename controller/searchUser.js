
import Users from "../models/user.js";

const searchUser= async (req, res) => {
    var query ={Firstname:req.query.query};
    console.log(query)
  
     Users.find(query)
     .then(result=>{
        console.log(result)
        return res.render("pages/usersSearchResults", { title: "My Store", Users :result });

     })
     .catch(error=> {
           res.status(500).json({ message:error });
         })
  };
export default searchUser