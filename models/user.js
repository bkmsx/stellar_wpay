var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema(
    {
        email: {type: String, max: 100},
        name: {type: String, max: 100},
        date_of_birth: {type: Date},
        phone_number: {type: Number},
        xlm: {type: Number}
    }
);

module.exports = mongoose.model('User', UserSchema);