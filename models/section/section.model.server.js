var mongoose = require('mongoose');

var sectionSchema = require('./section.schema.server');

var sectionModel = mongoose.model('SectionModel',sectionSchema);

function createSection(section) {
    console.log(section);
    return sectionModel.create(section);
}


var api ={
    createSection: createSection
}


module.exports = api;