let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Chandana:cvml462ccl4*@mytasker.wknnc.mongodb.net/facebookData?retryWrites=true&w=majority')
.then(function(){
  console.log('Database Connected');
})
.catch(function(err){
  console.log(e)
})

let UserSchema = mongoose.Schema({
  commentname : String,
  reviews : String
})

module.exports = mongoose.model('user', UserSchema)