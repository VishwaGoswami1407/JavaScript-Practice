const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

const myTotal2 = myNums.reduce( (acc, currval) =>  acc + currval , 0)

console.log(myTotal2);

const shoppingCart = [
    {
        itemName: 'js courses',
        price: 100,
        quantity: 2
    },
    {
        itemName: 'java scourses',
        price: 800,
        quantity: 7
    },
    {
        itemName: 'python scourses',
        price: 1000,
        quantity: 2
    }  
]

const shoppingTotal = shoppingCart.reduce((acc, item) => acc + item.itemName, 0)
console.log(shoppingTotal.format);