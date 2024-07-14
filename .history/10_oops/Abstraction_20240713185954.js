class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Public method
    getDetails() {
        return `${this.make} ${this.model} (${this.year})`;
    }

    // Private method (simulated using a closure)
    #calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }

    // Public method using the private method
    getAge() {
        return this.#calculateAge();
    }
}

const myCar = new Car('Toyota', 'Camry', 2015);

console.log(myCar.getDetails());  // Output: Toyota Camry (2015)
console.log(myCar.getAge());      // Output: 9 (if the current year is 2024)

// The following line will cause an error because #calculateAge is private
// console.log(myCar.#calculateAge());