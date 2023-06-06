import prod from "../models/products.js";

function searchProduct(req, res) {
    var query = { category: req.body.search};
    prod.find(query)
        .then(result => {
            if (result.length > 0) {
                res.send('taken');
            }
            else {
                res.send('available');
            }
        })
        .catch(err => {
            console.log(err);
        });
}    

export default{searchProduct};