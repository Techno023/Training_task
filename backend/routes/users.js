var express = require('express');
const mongoose = require('mongoose');
const schema  = require('../models/usersschema');
const schema1  = require('../models/imageschema');
var router = express.Router();
// let call = {}
router.get('/', function(req, res, next) {
  console.log(req.body);
  res.send('Hello Api Server is working'); 
});

router.viewList = ()=>{
  router.get('/user',async (req, res)=> {
    try{
        const list =await Userlist.find({})
        console.log(list);
        res.send(list)
    }catch(e){
        res.send(e)
    }  
  })
}
// insertData(viewList)

router.insertData = (callback)=>{
  router.post('/user', (req, res) =>{
    console.log(req.body);
    res.send("Data inserted")
    schema.create(req.body).then((Userlist)=>{
      res.send(Userlist)
      callback();
    })
    // new schema(req.body).save()
  });
  
}

router.put('/user/:id',(req,res)=>{
  console.log(req.params.id);
  schema.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
    schema.findOne({_id: req.params.id}).then((Userlist)=>{
      res.send(Userlist)
    })
  })
});

router.delete('/user/:id',(req,res)=>{
  console.log(req.params.id);
  schema1.findByIdAndRemove({_id:req.params.id}).then((Userlist)=>{
    res.send(Userlist)
  })
});


module.exports = router;
