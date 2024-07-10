//create a array, decclare objects firstname and marks in side array,  and print evry objects firstname using foreach method

// let arr = [{
//     firstName : "prakash",
//     marks : 87
// },
// {
//     firstName : "basu",
//     marks : 82
// },
// {
//     firstName : "devnath",
//     marks : 89
// }];

// arr.forEach((student) => {
//     console.log(student.firstName)
// })



//declare a array print each number using forEach method

// let arr = [1,2,3,4,5];

// let print = function(el){
//     console.log(el);
// }

// arr.forEach(print);

// let arr = [1,2,3,4,5];

// arr.forEach(function(el){
//     console.log(el)
// })  


// using arrow function print each array

// let arr = [1,2,3,4,5];


// arr.forEach((el) =>{
//     console.log(el)
// })







// //map function
// let arr = [2,4,6,8,10];

// let square = arr.map((el) => {
//     return el * el;
// });






                    //filter
 
// let num = [1,2,4,6,8,10,3,5,7,12,45,66,44,99];

// let even = num.filter((n) => {
//     return n % 2 ==0;
// });

// let odd = num.filter((n) => {
//     return n % 2 != 0;
// });








// reduce function
 





// let arr = [1,2,3,4,5];

// let finalValue = arr.reduce((acc , ele ) => {
//     return acc + ele;

// });

// console.log(finalValue)





// maximum value from an array







// let array = [1,3,58,89];

// let maximum = Math.max(...array);
// console.log(maximum);



// let array = [1,3,58,89];

// let max= array.reduce((a,b) => Math.max(a,b));
// console.log(max)




// let array = [1,3,58,89,99];

// let max = array.reduce((a,b) => {

//     if( b > a){
//         return b;
//     }else{
//         return a
//     }

// });

// console.log(max)



                        //Create a function to find the min number in an array.

// let arr = [1,3,5,6,8,99,77,55];

// let less = arr.reduce((min, max) => {
//     if(min < max){
//         return min;
//     }else{
//         return max
//     }
// });
// console.log(less)




// Check if all numbers in our array are multiples of 10 or not.


// let nums = [10,20,30,40];

// let ans = nums.every((el) => el % 10 == 0);
// console.log(ans)




let num = [2,1,3,4,6,5,0,5,];

