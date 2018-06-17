var mongoose = require('mongoose');

var enrollmentSchema = require('./enrollment.schema.server');

var enrollmentModel = mongoose.model('EnrollmentModel',enrollmentSchema);

function enrollStudentInSection(enrollment) {
    console.log(enrollment);
    return enrollmentModel.create(enrollment);
}


// function findSectionsForCourse(courseId) {
//     return sectionModel.find({courseId: courseId});
// }
//
//
var api ={
    enrollStudentInSection: enrollStudentInSection
}


module.exports = api;