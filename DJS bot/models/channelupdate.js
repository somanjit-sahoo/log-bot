const { Schema, model } = require('mongoose');

module.exports = model('channelupdates', new Schema({
    Guild: String,
    Channel: String,
}))