const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 2)
console.log(myTotal);