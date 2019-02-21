var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
rl.question('how areyou\n:', function(ans){
    console.log('your answer is: '+ans);
    rl.close();
});

