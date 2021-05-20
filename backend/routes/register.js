var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var User = require('../models/data');
const multer = require('multer');
const upload = multer({dest : 'public/images/'})


router.post('/register',upload.single('profile') ,async (req, res) =>{
      const dbdata = await User.findOne({email:req.body.email})
    //   console.log( " dbdata"+  dbdata);
      if(dbdata){
          res.send("Try with Other Email Id")
      }else{   
      var hashedPassword = bcrypt.hashSync(req.body.password, 10);
      var data = User.create({
          name : req.body.name,
          email : req.body.email,
          password : hashedPassword,
          profile: req.file.originalname
        })
      data.then((list)=>{
          res.send(list)
      });
      }
  });

router.post('/login',async(req, res)=>{
    console.log("body data: ="+req.body.email);
    const dbdata = await User.findOne({email:req.body.email})
    // const dbdata = await User.findOne({email:"ram@gmail.com"})
    console.log("dbdata : -"+dbdata);
    if(dbdata){
      const pass = await bcrypt.compare(dbdata.password,password)
      console.log("pass  :- "+pass);
        if(pass){
          const token = await jwt.sign({_id:dbdata._id},"iamsandeep")
          console.log(token);
          const veri = await jwt.verify(token,"iamsandeep")
          console.log(veri)
          res.send("You are logining successfully")
        }else{
          res.send("Password Error")
        }
    }else{
      res.send("Invalid Email")
    }    
})
module.exports = router;