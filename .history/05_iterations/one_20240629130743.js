// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
 
    // console.log(element);

}


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10 ; j++) {
        // console.log(`inner loop value ${j} and inner loop value  ${i} `);
    //   console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}