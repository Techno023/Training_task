var mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	name:String,
	email:String,
	password:String,
    // profile:{
	// 	type:String,
	// 	default:null
	// }
	profile : String
});
Userlist = mongoose.model("userdata",userSchema)
// const Key = "mynameiskhan"
module.exports = Userlist
 
