
var mongoose = require('mongoose')
var userSchema = require('./user.schema.server')


userModel = mongoose.model('UserModel',userSchema);


function createUser(user){
    return userModel.create(user);
}


function findAllUsers() {
    return userModel.find();
}


function findUserById(userId) {
    return userModel.findById(userId);
}

var api ={
    createUser: createUser,
    findAllUsers: findAllUsers,
    findUserById: findUserById
}


module.exports = api;