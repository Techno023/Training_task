const express = require("express");
const router = express.Router();
const Profile = require("../models/imageschema");
const mongoose = require("mongoose");
const multer = require('multer');
// const upload = multer({dest : 'public/images/'})

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/images/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
   fileFilter:function fileFilter(req,file,cb) {
        if(file.mimetype === "image/jpeg"  || file.mimetype ==="image/png"){
          cb(null,true)
        }else{
          cb(null,false)
        }
   }

  });

  router.post("/img", upload.single('profileImage'), (req, res, next) => {
    // console.log(file.originalname);
    res.send(req.file);
    const profile = new Profile({
      name: req.body.name ,
      profileImage: req.file.path 
    });
    profile.save()
  });

// Step 7 - the GET request handler that provides the HTML UI

router.get('/img', (req, res) => {
	Profile.find({}, (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send('An error occurred', err);
		}
		else {
			res.send(items)
		}
	});
});

  module.exports = router;