var net = require('net');

var server = net.createServer(function(socket){
    
    var date = new Date();
    
    var timeNow = date.getFullYear()+'-'+appendZero(date.getMonth()+1)+'-'+appendZero(date.getDate())+' '+appendZero(date.getHours())+':'+appendZero(date.getMinutes());
//    socket.write(timeNow);
    socket.end(timeNow+'\n');
    
});


function appendZero(num)    {
    if(num<10)  {
        return '0'+num;
    }else{
        return num;
    }
}

server.listen(process.argv[2]);