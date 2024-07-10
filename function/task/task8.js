//Qs1. Write a JavaScript function that returns array elements larger than a number.


//Write a JavaScript function to extract unique characters from a string. Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"



//Qs4: Write a JavaScript function to count the number of vowels in a String argument.


//Qs5. Write a JavaScript function to generate a random number within a range (start, end).

// let returnsLarge = (arr, num) => arr.filter(n => n> num);

// console.log(returnsLarge([10,5,20,15,30,25,40,35,50,45], 10));


let arr = [10,5,20,15,30,25,40,35,50,45];
let num = 5;

function returnLargeNumber(arr, num){
    for(let i = 0; i<=arr.length; i++){
       if(arr[i] > num){
        console.log(arr[i])
       }
    }
}
returnLargeNumber(arr, num);