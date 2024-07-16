// call and bind keyword
// window = {this = window}
// node = {} empty 


// function(){
//     callme()
// }


function setUsername(username){
    //complez DB calls
    this.username = username
}
function createUser(username, email, password)
{
    setUsername.call(username)

    this.email = email
    this.password = password
}
 
const chai = new createUser("vishwa", "vishwa@gmail.com", "123")
console.log(chai);