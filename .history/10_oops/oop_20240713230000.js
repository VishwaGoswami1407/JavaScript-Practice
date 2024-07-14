// const user = {
//     userName: "vihswa",
//     loginCount: 8,
//     signedIn: true,

//     getUSerDetails: function(){
//         // console.log("Got user details from database");  
//         // console.log(`username: ${this.userName}`);
//         console.log(this);
//     }

// }
// console.log(user.loginCount);
// console.log(user["userName"]);
// console.log(user.getUSerDetails());
// console.log(this);

// constructor function

function user(userName, loginCount, isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn


    this.greeting = function(){
        console.log(`welcome ${this.userName}`);
    }

     return this
}
const userOne = new user("Vishwa", 12, true)
const userTwo = new user("chai aur code", 11,false) // without new keyword values is overwrite 
console.log(userOne);
console.log(userTwo);

//new keyword
// first empty object created it is known as instance
// second constracture called 
// this keyword inject
// output