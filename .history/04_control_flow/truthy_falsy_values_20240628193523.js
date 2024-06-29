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