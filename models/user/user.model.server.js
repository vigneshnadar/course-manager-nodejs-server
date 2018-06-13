
var mongoose = require('mongoose')
var userSchema = require('./user.schema.server')


userModel = mongoose.model('UserModel',userSchema);


function createUser(user){
    userModel.create(user);
}

var api ={
    createUser: createUser
}


module.exports = api;