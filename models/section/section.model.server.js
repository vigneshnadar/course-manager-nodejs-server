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

function decrementSectionSeats(sectionId) {
    return sectionModel.update({
        _id : sectionId
    },{
        $inc: { seats: -1 }
    })

}

function incrementSectionSeats(sectionId) {
    return sectionModel.update({
        _id : sectionId
    },{
        $inc: { seats: +1 }
    })

}

function removeSection(sectionId) {
    return sectionModel.remove({
        _id : sectionId
    })

}




var api ={
    createSection: createSection,
    findSectionsForCourse: findSectionsForCourse,
    decrementSectionSeats: decrementSectionSeats,
    incrementSectionSeats: incrementSectionSeats,
    removeSection: removeSection
}


module.exports = api;