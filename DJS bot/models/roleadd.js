const { Schema, model } = require('mongoose');

module.exports = model('roleadds', new Schema({
    Guild: String,
    Channel: String,
}))