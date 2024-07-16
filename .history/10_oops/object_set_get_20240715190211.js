const user = {
    _email: 'vishwa@.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },



    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }


}

const tea = Object.create(user)
console.log(tea.email);