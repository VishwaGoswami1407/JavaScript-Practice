class user{

    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}













// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     makeSound() {
//         console.log(`${this.name} makes a sound`);
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         console.log(`${this.name} barks`);
//     }
// }

// const myDog = new Dog('Buddy');
// myDog.makeSound(); // Output: Buddy barks