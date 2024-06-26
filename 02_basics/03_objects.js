// singleton, 

// object literals
// Object.create // singleton make

const mySym = Symbol("key1")

const JsUser = {
    name: "vishwa",
    "full name": "vishwa Goswami",
    [mySym]: "mykey1",
    age: 20,
    location: "gujrat",
    email: "vishwa22@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log( JsUser[mySym]);



// JsUser.email = "goswami@.com"
// Object.freeze(JsUser)

// JsUser.email = "goswami@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js users");
}

JsUser.greetingTwo = function(){
    console.log(`hello js users, ${this.email} and ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());