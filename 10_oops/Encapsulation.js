class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
    setName(newName) {
        this.#name = newName;
    }
}

const person = new Person('John');
console.log(person.getName()); // Output: John
person.setName('Jane');
console.log(person.getName()); // Output: Jane



// A closer is the combinqation of a function bundled together (enclosed) with referances to its surrounding state .