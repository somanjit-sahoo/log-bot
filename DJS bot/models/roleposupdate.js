const { Schema, model } = require('mongoose');

module.exports = model('roleposupdate', new Schema({
    Guild: String,
    Channel: String,
}))