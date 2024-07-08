//Create a function that prints a poem.

// function prientPoems(){
//     console.log("Curtains forcing their willagainst the wind,children sleep,exchanging dreams with seraphim.")
// }

// prientPoems();



//Create a Function to roll a dice & always display the value of the dice (1 to 6).


// function diceRoll(){
// let rollDice = Math.floor(Math.random()*6)+1;
// console.log(rollDice);
// }

// diceRoll();


// QS1:Create a Function that gives us the average of 3 numbers.

// function averageOfNumber(a,b,c) {
//     console.log((a+b+c)/3);
    
// }
// averageOfNumber(10,20,30);


//Create a Function that prints the multiplication table of a number.

// function Table(n) {
//     for(let i = n; i<=n*10 ; i+=n){
//         console.log(i)
//     }
// }
// Table(5);

                       //return questions

// Create a Function that returns the sum of numbers from 1 to n.

// function sumOfNumber(n){

//     let sum = 0;

//     for(let i=0; i<=n; i++){
//         sum+=i;
//     }
//     return sum;

    

// }


//Create a Function that returns the concatenation of all strings in an array


let str = ["Hi" , "this" , "is" , "prakash"];

function concat(str){


    let result = "";

    for(let i=0; i<str.length; i++){

        result+=str[i]; 

    }
    return result;

}

