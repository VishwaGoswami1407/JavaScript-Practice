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
console.log(user.loginCount);
console.log(user["userName"]);
console.log(user.getUSerDetails());