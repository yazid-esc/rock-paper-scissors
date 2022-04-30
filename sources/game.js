



// FUNCTIONS

function computerPlay() {
    let getRandomInteger = function() {
        return Math.floor((Math.random() * 10));
    };

    // Use getRandomInteger() to produce random int from 1 - 3
    let randomValue = (getRandomInteger() % 3) + 1;

    switch(randomValue) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }

}

playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    // TEST CODE: Comment out when done
    {
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log("-------------------------------\n")
    }
    
    // Check case: Selectoins are the same
    if(playerSelection === computerSelection) {
        return `Tie : both chose ${playerSelection}`;
    }

    if(playerSelction === "ROCK") {
        if(computerSelection === "SCISSORS") {
            return "You win! ROCK beats SCISSORS";
        } else {
            return "You loose! PAPER beats ROCK";
        }
    }

    if(playerSelction === "PAPER") {
        if(computerSelection === "ROCK") {
            return "You win! PAPER beats ROCK";
        } else {
            return "You loose! SCISSORS beats PAPER";
        }
    }

    if(playerSelction === "SCISSORS") {
        if(computerSelection === "PAPER") {
            return "You win! SCISSORS beats PAPER";
        } else {
            return "You loose! ROCK beats PAPER";
        }
    }

    return "Invalid input - please try again\n";
}



// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());