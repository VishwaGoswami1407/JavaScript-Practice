// arrays

//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "maagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Arrray methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()


// myArr.unshift(9) // add first value
// myArr.shift()//remove first value
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
console.log("D ", myArr);

//
