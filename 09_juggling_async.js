var http = require('http');

var count =3;
var contentResults = [];


function hitRequests(i) {
     http.get(process.argv[i+1],function(response){
        response.setEncoding('utf8');

        var entireContent='';

        response.on('data', function(chunk){
            entireContent += chunk;
        });

        response.on('end', function(chunk){ 
            
            contentResults[i] = entireContent;
            count --;
            
            if(count <= 0)  {
                printAll();
            }   

        });  

    }).on('error',function(e){

        console.log('error'+e);
    });
}
    
for(i=1;i<=3;i++)    {
    hitRequests(i);
}

function printAll() {
    contentResults.forEach(function(result){
        console.log(result);
    });
}