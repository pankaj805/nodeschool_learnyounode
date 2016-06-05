var fs = require("fs");

fs.readFile(process.argv[2],function(err,data){
    var count = data.toString().split('\n').length;
    console.log(count -1);
});