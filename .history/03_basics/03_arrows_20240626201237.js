//this correct context referces 
const user = {
    username: "vishwa",
    price: 199,
    welcomeMessage: function (){
        console.log(`${this.username} , welcome to website`);
    }

}
user.welcomeMessage