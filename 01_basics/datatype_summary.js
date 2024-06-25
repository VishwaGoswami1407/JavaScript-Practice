// # primitive datatype 

// 7 types :  String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 72912496339268593265n

// console.log(bigNumber);


// # referance type datatype / Non primitive 

// Array, Object, Functions


const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name : "vishwa",
    age : 20,
}

const myFunction =  function(){
    console.log("hello world");
}

console.log(typeof heros );

//###############################################


// memory : Stack (primitive), Heap(Non primitive)

let myYoutubeName = "vishwaGoswami"
 
let anotherName = myYoutubeName;
anotherName = "ChaiAurCode"
console.log(myYoutubeName);
console.log(anotherName);

let user  = {
    email : "vishwa@gmial.com",
    upi: "user@ybl"
}
let userTwo = user;
console.log(user);
console.log(userTwo);

userTwo.email = "vishwa@gmail.com"

console.log(user.email);
console.log(userTwo.email);





