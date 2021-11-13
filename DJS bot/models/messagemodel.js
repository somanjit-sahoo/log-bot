const { Schema, model } = require('mongoose');

module.exports = model('messages', new Schema({
    Guild: String,
    Channel: String,
}))