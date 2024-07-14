// fetch('https://something.com').then().catch().finally()


//two part of promise 
const promiseOne = new Promise(function(resolve, reject){
    //do as async task
    //DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
    },1000)

})