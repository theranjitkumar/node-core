const path = require('path');
const fs  = require('fs');

var x = path.basename('./demo.txt');
console.log(x);
var y = path.parse('C:\\path\\dir\\file.txt');
// Returns:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
console.log(y);


fs.readFile('./demo.txt', (err, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});