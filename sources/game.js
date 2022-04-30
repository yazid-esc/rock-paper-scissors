



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

    // Check case: Selectoins are the same
    if(playerSelection === computerSelection) {
        return `Tie : both chose ${playerSelection}`;
    }
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