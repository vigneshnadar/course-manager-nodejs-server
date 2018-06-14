

module.exports = function(app){
    app.get('/api/user',findAllUsers)
    app.get('/api/user/:userId',findUserById)
    app.post('/api/user',createUser)
    app.get('/api/profile',profile)

    var userModel = require('../models/user/user.model.server')


    
    function findUserById(req, res) {
        var id = req.params['userId'];
        userModel.findUserById(id)
            .then(function (user) {
                res.json();
            })
    }
    
    function profile(req, res) {
        console.log('profile');
        console.log(req.session['currentUser']);
        res.send(req.session['currentUser']);
    }
    
    function createUser(req, res) {
        var user = req.body;

        //res.send(user);

        userModel.createUser(user)
            .then(function (user) {
                console.log("status is"+user);
                req.session['currentUser']= user;
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


