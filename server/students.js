/**
 * Created by mohamedisse on 12/22/16.
 */
var mongoose = require('mongoose');

// SCHEMA SETUP

var studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    math_level: String,
    english_level:String
});

module.exports = mongoose.model("Student", studentSchema);