// call and bind keyword
// window = {this = window}
// node = {} empty 


// function(){
//     callme()
// }


function setUsername(username){
    //complez DB calls
    this.username = username
    console.log("colled");
}

function createUser(username, email, password)
{
    setUsername.call(this, username)

    this.email = email
    this.password = password
}
 
const chai = new createUser("cahi", "vishwa@gmail.com", "123")
console.log(chai);