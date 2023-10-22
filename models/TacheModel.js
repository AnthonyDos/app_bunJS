const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const TacheSchema = mongoose.Schema({
    name: {type: String, require: true},
    type: {type: String, require: true},
    description: {type: String, require: true}
})

TacheSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Tache', TacheSchema);