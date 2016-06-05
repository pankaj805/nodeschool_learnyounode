var fs = require('fs');

var content = fs.readFileSync(process.argv[2]).toString();

//console.log(content);

var sub = content.split('\n');


console.log(sub.length-1);
