let favMovie="Bhagaban";

let guess = prompt("guess my Favorite Movie");

while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("wrong guess please try once again");
}


if (guess == favMovie) {
    console.log("Currect Guess")
} else {
    console.log("you Quit")
}