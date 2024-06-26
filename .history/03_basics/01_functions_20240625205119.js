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
    console.log("vishwa");
    let result = number1 + number2
    return result
    //never print vishwa cause it clause before return statement
    console.log("vishwa");
}
const result = addTwoNumbers(4, 1)
console.log("Result: ", result);