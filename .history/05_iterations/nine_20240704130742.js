const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${curr}`);
    return acc + currval
}, 0)
console.log(myTotal);