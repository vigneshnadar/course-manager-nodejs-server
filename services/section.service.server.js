

module.exports = function(app){

    app.post('/api/course/:courseId/section',createSection)


    var sectionModel = require('../models/section/section.model.server')



    function createSection(req, res) {
        var section = req.body;

        //res.send(user);

        sectionModel.createSection(section)
            .then(function (section) {
                console.log("section is"+section);
                // req.session['currentUser']= user;
                res.json(section);
            })
    }


}


