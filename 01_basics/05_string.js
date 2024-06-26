const name = "vishwa"
const repoCount = 50
console.log(name + repoCount + "values");
console.log(`hello my name ${name} and my repo account is ${repoCount}`);
const gameName = new String('vishwa_maa')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h '));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "   vishwa   "
console.log(newStringOne.trim());

const url = "https://vishwa.com/vishwa%20goswami"
console.log(url.replace('%20', '-'));
console.log(url.includes('vishwa'));

console.log(gameName.split('_'));

