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
});



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('async to resolved');
})


const promisThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Vishwa", email: "vishwa12@grami.com"})
    },1000)
})

promisThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
   
    setTimeout(function(){

        let error = true
        if(!error){
            resolve({userName: "ABC", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.userName  ///chaining
})
.then((userName) => {
    console.log(userName);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolve or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: "javaScript", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
  
    try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
        console.log(error);
   }
}
consumePromiseFive()



async function getAllUsers(){
  
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //    console.log(response);
        const data = response.json()
        console.log(data);
   } catch (error) {
        console.log("E:" ,error);
   }
}
getAllUsers()
