let max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if(guess == "quit"){
        console.log("you quit");
        break;
    }

    if( guess == random){
        console.log("You are right! Congrats! random number was",random);
        break;
    }else if(guess < random){
        guess = prompt("hint: your huess number was very small, try ance again")
    }else{
      guess =  prompt("hint: your guess number is very large, try once again")
    }
}