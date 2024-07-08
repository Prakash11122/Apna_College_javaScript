// function printName(){
//     console.log("i like rich person")
// }
// printName();


// function print() {
//     for(let i=0; i<=5;i++){
//        console.log(i)
//     }
// }
// print();


// function printAge(){

//     let age = 18;

//     if( age >=18){
//         console.log("eligibul for vote");
//     }else{
//         console.log("not eligibule for vote")
//     }

// }
// printAge();




//return statement


// function sum(a,b){
//     console.log("prakash");
//     console.log("prakash");
//     return a+b;
//     console.log("prakash");
//     console.log("prakash");
// }
// sum(1,99);




                               //scope

//  1.function Scope ;       


// let sum =5555;  // global scope
// function calSum(a,b){
//     let sum = a+b;   //function scope
// console.log(sum);
// }
// calSum(5,5)
// console.log(sum);



//Block scope

// {
//     let a=10;
// }
// console.log(a)




//lexical scope

function outterScope(){
    let x = 10;
    let y = 20;

    function innerFunction(){

        let a = 11;

        console.log(x);
        console.log(y)

    }

    innerFunction();
}
outterScope();