//immediately invoked function expression (IIFE)
// remove global scope polition  oroblems 
(function chai(){
    console.log('DB CONNECTED');

})();
// ; is important to end function in iife

//() 1 for funcrion
//() 2 for  execution call
( function aurcode(){
    console.log('DB CONNECTED TWO');
})()