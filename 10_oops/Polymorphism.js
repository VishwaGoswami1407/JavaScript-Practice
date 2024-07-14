class Animal {
    makeSound() {
        console.log('Some generic animal sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Bark');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Meow');
    }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.makeSound());
// Output: Bark
//         Meow
