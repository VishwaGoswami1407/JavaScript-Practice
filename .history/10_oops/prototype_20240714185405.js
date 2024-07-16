let myName = "vishwa    "

// console.log(myName.trim().length);

console.log(myName.trueLength());


let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
heroPower.hitesh()