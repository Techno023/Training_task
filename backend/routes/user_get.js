const dbcon = require('../config/dbconn')
const mongooose = require('mongoose')
require('../models/usersschema');
var express = require('express');
var router = express.Router();
const app = express()
const Userlist = mongooose.model("Userlist")

router.get('/getsmydb',async (req, res)=> {
      
        dbcon.collection('customer').find({}).toArray((err,res)=>{ 
            if(err) throw err;  
            console.log(res);    
            // dbcon.close()
        }) 
  })


  


//   app.listen(9000,(req,res)=>{
//     console.log("Running");
//   })
  module.exports = router;