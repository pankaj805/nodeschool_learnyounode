function one(callback)  {
  
    setTimeout(function(){
       console.log('Hello'); 
        
    callback();
    },4000);
    
    
};

function two(callback)  {
    setTimeout(function(){
       console.log('Chofty');
       callback();
    },3000);
    
};


function three()  {
    setTimeout(function(){
       console.log('Kofty'); 
    },2000);
    
};

one(function(){
    two(function(){
        three();
    });
});