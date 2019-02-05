const Hapi = require('hapi');
const server = Hapi.server({
	host:'localhost',
	port:3000
});

server.route({
	method:'GET',
	path:'/',
	handler: function(request, reply){
	return 'Hello Hapijs';
	}
});

server.route({
	method:'GET',
	path:'/{name}',
	handler:function(request, reply){
	return '<input type="text" name="name"><input type="submit"><br>Hello'+request.params.name;
	}
});


async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();

