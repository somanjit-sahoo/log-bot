const { Schema, model } = require('mongoose');

module.exports = model('emojiadd', new Schema({
    Guild: String,
    Channel: String,
}))