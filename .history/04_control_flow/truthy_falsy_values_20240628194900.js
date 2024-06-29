//++++++++++++++ Truthy values and false values +++++++++

const usreEmail = []

if(usreEmail){
    console.log("Got usre email");
}
else{
    console.log("Don't have user email");
}
// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value

//"0", 'false', " ", [], {}, function(){}

if(usreEmail.length === 0){
    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


//true values imp
// false == 0
// false == ''
// 0 == ''



//Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);


