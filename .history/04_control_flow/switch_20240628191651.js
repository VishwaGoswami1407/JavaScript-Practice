// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "april"
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:// for duplicate shift alt and down arrow keys
        console.log("fabruary");
        break;
    case 3:// for duplicate shift alt and down arrow keys
        console.log("march");
        // break;//if a case have no break statement then it is run all below case expect default case
    case 4:// for duplicate shift alt and down arrow keys
        console.log("april");
        break;
    default:
        console.log("invalid month");
        break;
}