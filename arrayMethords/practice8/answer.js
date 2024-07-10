//Create a function to find the min number in an array.

let arr = [1,3,5,6,8,99,77,55];

let less = arr.reduce((min, max) => {
    if(min < max){
        return min;
    }else{
        return max
    }
});
console.log(less);



