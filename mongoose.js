var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mongoose = require('mongoose');
var db = 'mongodb://localhost:27017/meanBlog';

mongoose.connect(db, {
    useNewUrlParser: true
})
var User = require('./mongoose/mongoose.model');

app.get('/', function (req, res) {
    res.send('Express Mongoose res api!\n <a href="./users">user api</a>,');
})

app.get('/users', function (req, res) {
    User.find().then((users) => {
        console.log('users fetched');
        res.json(users);
    })
})

app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    User.findById(id).then((user) => {
        res.json(user);
    })
})

app.delete('/user/:id', function (req, res) {
    var id = req.params.id;
    User.findByIdAndDelete(id).then((user) => {
        res.send('deleted successfully');
    })
})

app.put('/user/:id', function (req, res) {
    var id = req.params.id;
    User.findByIdAndUpdate(id, {
        userName: 'updated name',
    }).then(() => res.send('user updated'));
})

// var user = new User({
//     userId: '11111',
//     userName: '',
//     userEmail: '',
//     userMobieNo: 0
// });

app.post('/user', function (req, res) { debugger
    var user = new User({
        userId: req.body.userId,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userMobieNo: req.body.userMobieNo
    });
    console.log(user);
    user.save().then(() => res.send('new user saved'));
})

app.listen('3000', () => console.log('server start on port 3000'))