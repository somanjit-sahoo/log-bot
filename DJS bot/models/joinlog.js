const { Schema, model } = require('mongoose');

module.exports = model('joinlog', new Schema({
    Guild: String,
    Channel: String,
}))