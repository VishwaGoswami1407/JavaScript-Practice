class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this.password.toUpperCase()
    }

    set password(value){
        this.password = value.toUpperCase()
    }

}

const vishwa = new user("vishwa@.com", "123")
console.log(vishwa.password);