

module.exports = function(app){

    app.post('/api/course/:courseId/section',createSection)
    app.get('/api/course/:courseId/section',findSectionsForCourse)
    app.post('/api/section/:sectionId/enrollment',enrollStudentInSection)


    var sectionModel = require('../models/section/section.model.server')
    var enrollmentModel = require('../models/enrollment/enrollment.model.server')
    
    
    function enrollStudentInSection(req, res) {
        var sectionId = req.params['sectionId'];
        var currentUser =   req.session.currentUser;
        var userId = currentUser._id;
        var enrollment = {
            student : userId,
            section : sectionId
        };

        // res.json(enrollment);

        enrollmentModel
            .enrollStudentInSection(enrollment)
            .then(function (enrollment) {
                res.json(enrollment);
            })
    }



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


