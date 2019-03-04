const Hapi = require('hapi');
const mysql = require('mysql');
const server = Hapi.server({
    host: 'localhost',
    port: 3000
});

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('mysql connected...');
});

server.route({
	method:'GET',
	path:'/',
	handler: function(request, reply){
	return 'Hello Hapijs<br><a href="./students">Go to Students api</a>';
	}
});

server.route({
    method: 'GET',
    path: '/students',
    handler: function (request, reply) {
        con.query('select * from student', function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
        return 'sql result in console';
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        return '<input type="text" name="name"><input type="submit"><br>Hello' + request.params.name;
    }
});

async function start() {

    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();

module.exports = server;