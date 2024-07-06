const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple "
}

for (const key in myObject) {
   console.log(`${key} shoetcut is for ${myObject[key]}`);
    
}