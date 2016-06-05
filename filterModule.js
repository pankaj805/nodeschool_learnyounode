var fs= require('fs');
var path = require('path');

function filterDir(dir,ext,callback)    {
    
    fs.readdir(dir, function(err,list){
        
        if(err) {
           return callback(err);
        }
        
        var returnList = [];
    
        list.forEach(function(file){
            if(path.extname(file) == '.'+ext){
                returnList.push(file);
            }
        });
        
        callback(null,returnList);
    });
};
               
module.exports = filterDir;