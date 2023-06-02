import user from '../models/user.js';



function checkUN(req, res) {
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
}    

export default{checkUN};