const user = require('../models/user');


const checkUN = (req, res) => {
    var query = { Username: req.body.UserName };
    user.find(query)
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
};    

module.exports = {checkUN};