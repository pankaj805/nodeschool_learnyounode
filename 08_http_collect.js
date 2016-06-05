var http = require('http');


 http.get(process.argv[2],function(response){
    response.setEncoding('utf8');
    
     var entireContent='';
     
    response.on('data', function(chunk){
        entireContent += chunk;
    });
    
    response.on('end', function(){
        console.log(entireContent.length);
        console.log(entireContent);
    });  
    
}).on('error',function(e){
    
    console.log('error'+e);
});


// Alternate Solution
//
// var bl = require('bl')
//
// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
