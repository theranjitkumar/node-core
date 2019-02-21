var fs = require('fs');

var readStreem = fs.createReadStream(__dirname+'/demo.txt', 'utf-8');
// readStreem.on('data', function(chunck){
//     console.log(chunck);
// })
// =====================================
var writeStreem = fs.createWriteStream (__dirname+'/demo1.txt');

readStreem.pipe(writeStreem);
