let myName = "vishwa    "

// console.log(myName.trim().length);

// console.log(myName.trueLength());


let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.vishwa = function(){
    console.log(`vishwa is present in all object`);
}

Array.prototype.heyVishwa = function(){
    console.log(`vishwa says hello`);
}

// heroPower.vishwa()
myHeros.vishwa()
myHeros.heyVishwa()
// heroPower.heyVishwa()


//inheritance

const user = {
    name: "vishwa",
    email: "vishwa@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user


Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUSerName = "chaiaurcode   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}
anotherUSerName.trueLength()