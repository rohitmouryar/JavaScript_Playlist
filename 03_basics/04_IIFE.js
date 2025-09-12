//Immediately Invoked fucntion Expression 
(function chai(){
    console.log(`db connected`);
    
})();

// ++++++++++++

(()=>{
    console.log(`db connected two`);
    
})();

// +++++++++++++++

((name)=>{
    console.log(`db connected two ${name}`);
    
})('Rohit')