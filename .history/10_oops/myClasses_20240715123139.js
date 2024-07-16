// ES6
// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
    
//     encryptPassword(){
//        return `${this.password}abc` 
//     }
//     chnageUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new user("chai", "chai@.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.chnageUsername());

// behind scene

function user( userusername, email, password){

    this.username = username;
    this.email = email;
    this.password = password

}
user.prototype.encryptPassword = function(){
    return `${this.password}abc` 
}
user.prototype.chnageUsername = function(){
     return `${this.username.toUpperCase()}`
}

const Tea = new user("chai", "chai@.com", "123")
console.log(chai.encryptPassword());
console.log(chai.chnageUsername());
