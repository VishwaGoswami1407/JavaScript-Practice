//this correct context referces 
const user = {
    username: "vishwa",
    price: 199,
    // its work on object this key word
    welcomeMessage: function (){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()
// console.log(this);// empty when global have no context and if its run in browser then it is window.console object

// function chai(){
//     let user = "vishwa"
//     console.log(this.user);// undefined
// }
// chai()

// const chai = function(){
//     let user = "vishwa"
//     console.log(this.user)
// }
// chai()

const chai =() =>{
    let user = "vishwa"
    console.log(this)
}
chai()