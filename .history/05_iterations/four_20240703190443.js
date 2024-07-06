const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple "
}

for (const key in myObject) {
   console.log(`${key} shoetcut is for ${myObject[key]}`);
    
}

const programming = ["js", "cpp", "python"]
for (const key in programming) {
    console.log(programming[key]);
}
const map = new Map();
map.set('IN', "india");
map.set('US', "Uinited State america");
map.set('fr', "France")
map.set('IN', "india");
for (const key in map) {
    console.log(key);
}