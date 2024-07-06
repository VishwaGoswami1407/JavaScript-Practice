const coding = ["js", "ruby", "java"]


// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
    
// })
// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newNums = myNums.filter((num) => num > 5)
// console.log(newNums);






const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newNums = myNums.filter((num) => {
//     return num > 4
// })

const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})



console.log(newNums);