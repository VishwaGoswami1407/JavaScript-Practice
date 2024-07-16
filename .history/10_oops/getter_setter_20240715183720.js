class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}vishwa`
    }

    set password(value){
        this._password = value
    }

}

const vishwa = new user("vishwa@.com", "abc")
console.log(vishwa.password);