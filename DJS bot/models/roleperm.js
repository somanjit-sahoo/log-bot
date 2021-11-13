const { Schema, model } = require('mongoose');

module.exports = model('rolepermchange', new Schema({
    Guild: String,
    Channel: String,
}))