var express = require('express');
var mysql = require('mysql');
var app = express();
var isMysqlConnected = false;
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

if (!isMysqlConnected) {
    con.connect(function (err) {
        if (err) throw err;
        isMysqlConnected = true;
        console.log("Mysql Connected!");
    });
} else {
    console.log("Mysql alredy Connected!");
}


app.get('/', function (req, res) {
    var query = 'select * from test.countryTbl inner join test.stateTbl on countryTbl.countryId=stateTbl.countryId;';
    con.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json({
            status: true,
            message: 'data fetched successfully',
            data: result
        });
    });
});


app.get('/state/:stateId', function (req, res) {
    var sid = req.params.stateId;
    var query = `select * from test.stateTbl where stateId=${sid}`;
    con.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log(isMysqlConnected);
        res.status(200).json({
            status: true,
            message: 'data fetched successfully',
            data: result
        });
    });
});

app.get('/students', function (req, res) {
    var query = `CALL test.students()`; // storre procedure used
    con.query(query, function (err, result, fields) {
        if (err) throw err;
        res.status(200).json({
            status: true,
            message: 'data fetched successfully',
            data: result
        });
    });
});

app.get('/student/:studentId', function (req, res) {
    var sid = parseInt(req.params.studentId);
    var query = `CALL test.student(1)`; // paramiterised storre procedure used
    con.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log(typeof (sid));
        res.status(200).json({
            status: true,
            message: 'data fetched successfully',
            data: result
        });
    });
});

app.get('/user', function (req, res) {
    var query = `select * from test.user`;
    con.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log(isMysqlConnected);
        res.status(200).json({
            status: true,
            message: 'user fetched successfully',
            data: result
        });
    });
});


app.listen('3000');

module.exports = app;