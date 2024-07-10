// function multipleGreet(func , count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet, 10);


// let odd = function(n){
//     console.log(!(n%2 == 0));

// }


// let even = function(n){
//     console.log((n%2 == 0));
// }

function oddEvenFactory(request){

    if (request == "odd") {
        return function(n){
            console.log(!(n%2 == 0));
        }

        return odd;
    } else if( request == "even"){
        return function(n){
            console.log((n%2 == 0));
        }
        return even;
    }else{
        console.log("wrong request")
    }

}

let request = "odd";
