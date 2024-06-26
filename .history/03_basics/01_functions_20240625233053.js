function sayMyName(){
    console.log('V');
    console.log('I');
    console.log('S');
    console.log('H');
    console.log('W');
    console.log('A');
}
// sayMyName()
// function addTwoNumbers(number1, number2)
// {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2)
{
    // console.log("vishwa");
    // let result = number1 + number2
    // return result
    //never print vishwa cause it clause before return statement
    return number1 + number2
    // console.log("vishwa");
}
const result = addTwoNumbers(4, 1)
// console.log("Result: ", result);

function loginUserMessage(userName = "sem"){
    if(!userName){
        console.log("please enter a username");
        return

    }
    return ` ${userName} just logged in`
}
// console.log(loginUserMessage("vishwa"));
// console.log(loginUserMessage("vishwa"));
// rest operator ... 
// function calculateCardPrice(...num1){
//     return num1
// }
function calculateCardPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCardPrice(200, 400, 600, 300));

const user = {
    userName: "vishwa",
    price: 199
}
function handleObject(anyObject)
{
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({userName})