const { Schema, model } = require('mongoose');

module.exports = model('moderationlogs', new Schema({
    Guild: String,
    Channel: String,
}))