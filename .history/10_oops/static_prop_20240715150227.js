class user{
    constructor(username){
        this.username = username
    }
   
    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
const vishwa = new user("vishwa")
console.log(vishwa.createId())


class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email

    }
}