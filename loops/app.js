
             //Odd Number

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
    
// }


// for(let i=1; i<=15; i=i+2){
//     console.log(i)
// }

// for(let i=0; i<=20; i=i+2){
//     console.log(i)
// }


// for(let i=15; i>=1; i=i-2){
//     console.log(i)
// }


// // Even Number


// for(let i=2; i<=15; i=i+2){
//     console.log(i)
// }

// for(let i=10; i>=2; i=i-2){
//     console.log(i)
// } 


// for(let i=4; i<=40; i=i+4){
//     console.log(i)
// }


//Take Number from user

// let n = prompt("Create a Table");
// n = parseInt(n);

// for(let i=n; i<=n*10; i+=n){
//     console.log(i);
// }


// for(let i=1; i<=3; i++){
    
//     for(let j=1; j<=3; j++){
//         console.log(j);

//     }
    
// }


// let i=5;

// while (i>=5) {
//     console.log(i)
//     i--;
// }


//loop with Array

// let fruits = ["mango", "Banana", "lichi", "guava", "promigrains"];

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }


//loops with nestred Array

// let heroes =[["IronMan", "SpideMan","thor"],["superMan","wonder man","flash"]];
              
//   for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);

//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`)
//     }
//   } 
  
  
//   Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array. Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2, Result should be arr = [1, 3, 4, 5, 6, 3]


//Answet-1
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let valutoremove = 2;

// let filteredArray = arr.filter(function(element){
//   return element !== valutoremove;
// });
// console.log(filteredArray);


//answer-2

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(i = 0; i<arr.length; i++){
//   if(arr[i] == num){
//     arr.splice(i,1)
//   }
// }
// console.log(arr)

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

let number = 287152;

let count = 0;

let copy = number;

while(copy > 0){
  count++;
  copy = Math.floor(copy/10);

}
console.log(count)
