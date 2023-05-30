import express from 'express';
var bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const User = require("../controller/User");

router.post('/checkUN', User.checkUN);


module.exports = router;