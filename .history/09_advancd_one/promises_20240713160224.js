// fetch('https://something.com').then().catch().finally()


//two part of promise 
const promiseOne = new Promise(function(resolve, reject){
    //do as async task
    //DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("promise consume");
})



new promise(function(resolve, rejecct){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('async to resolved');
})