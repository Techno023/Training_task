const dbcon =  require('../config/dbconn')
const schema  = require('../models/usersschema');
var express = require('express');
var router = express.Router();
router.post('/insertUser', function(req, res) {
    console.log(req.body);
    //   var user1 = {
    //   "UserEmail":"sandeep@gmail.com",
    //  "UserName":"sandeep shrivas", 
    //   "Password":"sandeep123",
    //   "Birthday":"2/06/1999",
    //   "MobileNo":"7896541236"
    //   }
    console.log(req.body);
    res.send("Data inserted")
    new schema(req.body).save()
  });
  module.exports = router;