//singleton and constructor

const tinderUser = new Object() // singeleton object
const tinderUser1 = {}  // non  singleton object

tinderUser.id = "123abc"
tinderUser.name = "vishwa"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "goswamivishwa2004@gmail.com",
    fullname: {
        userFullName: "vishwa",
        lastName: "goswami"
    }
}
console.log(regularUser.fullname.lastName);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3={...obj1, ...obj2}
// const obj3 = Object.assign({},  obj1, obj2, obj4)
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "vmg@.com"
    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogg'));
// console.log(tinderUser.isPrototypeOf());





const course = {
    courseName: "js",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);
//descructure 














