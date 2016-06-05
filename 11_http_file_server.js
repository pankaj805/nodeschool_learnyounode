var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req,res){
    
    var src = fs.createReadStream(process.argv[3]);
    src.pipe(res);
    
});

app.listen(Number(process.argv[2]));