//immediately invoked function expression (IIFE)
// remove global scope polition  oroblems 
(function chai(){
    //named IIFE
    console.log('DB CONNECTED');

})();
// ; is important to end function in iife

//() 1 for funcrion
//() 2 for  execution call
( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('vishwa')


// +++++++++++++++++ Execution context +++++++++++++++++++++++++++++++++

 