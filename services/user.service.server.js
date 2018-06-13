

module.exports = function(app){
    app.get('/api/user',findAllUsers)
    app.post('/api/user',createUser)

    var userModel = require('../models/user/user.model.server')


    function createUser(req, res) {
        var user = req.body;

        //res.send(user);

        userModel.createUser(user)
            .then(function (user) {
                console.log("status is"+user);
                res.send(user);
            })
    }

    function findAllUsers(req, res) {
        userModel.findAllUsers()
            .then(function (users) {
                res.send(users);
            })
    }
}


