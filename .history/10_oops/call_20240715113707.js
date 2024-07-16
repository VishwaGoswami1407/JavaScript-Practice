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
    setUsername(username)

    this.email = email
    this.password = password
}