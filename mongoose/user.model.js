var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// user Schema
var userSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    userName: String,
    userEmail: String,
    userMobieNo: Number
});
module.exports = mongoose.model('User', userSchema);
