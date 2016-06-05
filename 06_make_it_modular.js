var filterDir = require('./filterModule.js');


filterDir(process.argv[2],process.argv[3],function(err,list){
    if(err) {
        return console.log(err);
    }else{
        list.forEach(function(file){
           console.log(file); 
        });
    }
    
    
});