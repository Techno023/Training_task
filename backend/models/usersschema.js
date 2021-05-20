var mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	UserEmail:String,
	UserName:String,
	Password:String,
	Birthday:Date,
	MobileNo:Number
	
});
Userlist = mongoose.model("Userlist",userSchema)

module.exports = Userlist
 
