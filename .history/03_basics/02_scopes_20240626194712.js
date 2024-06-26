//  var c = 300
let a = 300
 if(true){
    let a = 10
    const b = 20
    console.log("inner: ", a);
   
 }
function one(){
    const userName = "vishwa"

    function two(){
        const website = "youtube"
        console.log(userName);
}
// console.log(website);
two();
}
one();



if(true){
    const userName = "vishwa"
    if(userName == "vishwa")
        {
            const website = " youtube"
            console.log(userName + website);
        }
        // console.log(website);
}
// console.log(userName);

//  console.log(a);
//  console.log(b);
//  console.log(c);