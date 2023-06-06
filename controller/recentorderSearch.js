import check from "../models/chckout.js";

const searchorder= async (req, res) => {
    var query ={FirstName:req.query.query};
    console.log(query)
  
    check.find(query)
     .then(result=>{
        console.log(result)
        return res.render("pages/recentorderSearchResults", { title: "Dashboard", recentOrder :result });

     })
     .catch(error=> {
           res.status(500).json({ message:error });
         })
  };
export default searchorder