const http = require('http');
http.createServer((req, res) => {
	res.status = 200;
	res.setHeader = ('content-type', 'text/html');
	res.write('<h3>Hello world...</h3>');
	res.end();
}).listen(3000, () => {
	console.log('server running on port 3000');
});