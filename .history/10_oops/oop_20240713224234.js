const user = {
    userName: "vihswa",
    loginCount: 8,
    signedIn: true,

    getUSerDetails: function(){
        // console.log("Got user details from database");  
        // console.log(`username: ${this.userName}`);
        console.log(this);
    }

}
// console.log(user.loginCount);
// console.log(user["userName"]);
// console.log(user.getUSerDetails());
// console.log(this);

// constructor function

function use(userName, loginCount, isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}
const userOne = user("Vishwa", 12, true)
console.log(userOne);