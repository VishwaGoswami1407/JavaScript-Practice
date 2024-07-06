//for of loop

// ["","","",""]
// [{},{},{}]


const arr = [1, 2, 3, 4, 5, 6, 7]
for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world"
for (const grit of greetings) {
     // console.log(`each character is ${grit}`);
}

// maps - its know for unique values
const map = new Map();
map.set('IN', "india");
map.set('US', "Uinited State america");
map.set('fr', "France")
map.set('IN', "india");
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    game1: 'NFS',
    'game2': 'maskgun'
}
// not work on object 
// for (const [key, value] of myObject) {
//     console.log(key,' :- ', value);
// }