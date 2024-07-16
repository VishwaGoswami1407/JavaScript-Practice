class user{
    constructor(username){
        this.username = username
    }
   
    logMe(){
        console.log(`username: ${this.username}`);
    }

    createId(){
        return `123`
    }
}
const vishwa = new user("vishwa")
vishwa.createId()