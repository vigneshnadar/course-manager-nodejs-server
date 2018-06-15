var mongoose = require('mongoose');

var sectionSchema = require('./section.schema.server');

var sectionModel = mongoose.model('SectionModel',sectionSchema);

function createSection(section) {
    console.log(section);
    return sectionModel.create(section);
}


function findSectionsForCourse(courseId) {
    return sectionModel.find({courseId: courseId});
}


var api ={
    createSection: createSection,
    findSectionsForCourse: findSectionsForCourse
}


module.exports = api;