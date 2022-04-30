



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

function playRound(playerSelection, computerSelection) {
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

    if(playerSelection === "ROCK") {
        if(computerSelection === "SCISSORS") {
            return "You win! ROCK beats SCISSORS";
        } else {
            return "You loose! PAPER beats ROCK";
        }
    }

    if(playerSelection === "PAPER") {
        if(computerSelection === "ROCK") {
            return "You win! PAPER beats ROCK";
        } else {
            return "You loose! SCISSORS beats PAPER";
        }
    }

    if(playerSelection === "SCISSORS") {
        if(computerSelection === "PAPER") {
            return "You win! SCISSORS beats PAPER";
        } else {
            return "You loose! ROCK beats PAPER";
        }
    }

    return "Invalid input - please try again\n";
}



console.log(playRound("ROCK", "ROCK"));
console.log("EXPECTED: Tie : ROCK , ROCK");

console.log(playRound("ROCK", "PAPER"));
console.log("EXPECTED: Loose : ROCK , PAPER");

console.log(playRound("ROCK", "SCISSORS"));
console.log("EXPECTED: Win : ROCK , SCISSORS");




console.log(playRound("PAPER", "ROCK"));
console.log("EXPECTED: Win : PAPER , ROCK");

console.log(playRound("PAPER", "PAPER"));
console.log("EXPECTED: Tie : PAPER , PAPER");

console.log(playRound("PAPER", "SCISSORS"));
console.log("EXPECTED: Loose : PAPER , SCISSORS");




console.log(playRound("SCISSORS", "ROCK"));
console.log("EXPECTED: Loose : SCISSORS , ROCK");

console.log(playRound("SCISSORS", "PAPER"));
console.log("EXPECTED: Win : SCISSORS , PAPER");

console.log(playRound("SCISSORS", "SCISSORS"));
console.log("EXPECTED: Tie : SCISSORS , SCISSORS");