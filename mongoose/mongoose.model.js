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
// // post Schema
// var postSchema = new Schema({
//     userId: String,
//     postId: String,
//     title: String,
//     body: String
// });
// module.exports = mongoose.model('Post', postSchema);
// // comment Schema
// var commentSchema = new Schema({
//     postId: String,
//     commentId: String,
//     name: String,
//     email: String,
//     body: String
// });
// module.exports = mongoose.model('Comment', commentSchema);
