const { Schema, model } = require('mongoose');

module.exports = model('roleadd', new Schema({
    Guild: String,
    Channel: String,
}))