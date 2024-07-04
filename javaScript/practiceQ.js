         //Question-1

// let popconSize = 'm';

// if (popconSize === 'xl') {
//     console.log(`price is : ${250}`);
// }else if (popconSize === 'l') {
//     console.log(`price is : ${200}`)
// }else if (popconSize === 'm') {
//     console.log(`price is : ${100}`)
// }else if (popconSize === 's') {
//     console.log(`price is : ${50}`)
// }


       //Question-2
 let str = "apple";
 
 if ((str[0] === 'a') && (str.length > 3)) {
    console.log('Good String')
 }else{
    console.log('not a good String')
 }

         //Question-3

 let num = 12;
 
 if ((num%3 === 0) && ( (num+1 == 15) || (num-1 == 11))) {
    console.log('safe');
 } else {
    console.log('not safe')
 }


         //Question-4
 let day = 5;
 
 switch (day) {
    case 1:
        console.log("monday")
        break;
        case 2:
        console.log("tuesday")
        break;
        case 3:
        console.log("wednesday")
        break;
        case 4:
        console.log("thursday")
        break;
        case 5:
        console.log("friday")
        break;
        case 6:
        console.log("saturday")
        break;
        case 7:
        console.log("sunday")
        break;
 
    default:
        break;
 }


//  let firstName = prompt("enter your firstName");
//  let lastName = prompt("enter your lastName");

//  console.log(`Welcome:  ${firstName  +  lastName}`);


            //Quation-5
 let number = 100;
 if (number % 10 == 0) {
    console.log("good")
 } else {
    console.log("bad")
 }

//Quation-6

// let user = prompt('enter name');
// let age = prompt('enter age');
// alert(`${user} is:  ${age} years old`)

//Quation-7


let quater =5;
switch (quater) {
    case 1:
        console.log("january","febuary","march",)
        break;
        case 2:
        console.log("april","may","jun")
        break;
        case 3:
        console.log("july","august","septumber")
        break;
        case 4:
        console.log("octeber","november","december")
        break;

    default: console.log("not an quater")
        break;
}

//Quation-7

let strr = "Animal";

if ((strr[0] === 'a' || strr[0] === 'A') && strr.length > 5) {
    console.log("golden string");
}else{
    console.log("not a golden string")
}