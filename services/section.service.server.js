

module.exports = function(app){

    app.post('/api/course/:courseId/section',createSection)
    app.get('/api/course/:courseId/section',findSectionsForCourse)


    var sectionModel = require('../models/section/section.model.server')



    function findSectionsForCourse(req, res) {
        var id = req.params['courseId'];
        sectionModel.findSectionsForCourse(id)
            .then(function (sections) {
                res.json(sections);
            })
    }

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


