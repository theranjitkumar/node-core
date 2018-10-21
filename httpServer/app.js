const http = require('http');
var fs = require('fs');

var data = fs.readFileSync('index.html');

http.createServer((req, res) => {
	res.status = 200;
	res.setHeader = (200,'content-type', 'text/html');
	// res.write('<h3>Hello world...</h3>');
	res.write(data.toString());
	res.end();
}).listen(3000, () => {
	console.log('server running on port 3000');
});