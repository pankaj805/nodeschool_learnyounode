var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    var reqDetail = url.parse(req.url);
    console.log(reqDetail);
    
    
    
    if('/api/parsetime' == reqDetail.pathname)  {
        var date = new Date(reqDetail.query.iso.toString().replace("iso=",""));
        
        
        var resultTime = {
            hour:date.getHours(),
            minute:date.getMinutes(),
            second:date.getSeconds()
            
        };
        
        
        res.end(JSON.stringify(resultTime));
        
        
    }else if('/api/unixtime' == reqDetail.pathname)  {
        
        var date = new Date(reqDetail.query.toString().replace("iso=",""));
       var resultTime = {
            unixtime:date.getTime()
            
        };
         res.end(JSON.stringify(resultTime));
        
    }else{
        res.end('Wrong request');
    }
    
    
});
server.listen(Number(process.argv[2]));