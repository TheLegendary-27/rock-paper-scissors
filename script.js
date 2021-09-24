//The Odin Project
//Rock-Paper-Scissors

let userScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let play;
    if(randomNumber === 1) {
        play = "rock";
    } else if(randomNumber === 2) {
        play = "scissors";
    } else {
        play = "paper";
    }
    return play;
}

function playOneRound(userSelection, computerSelection) {
    userSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    switch(userSelection) {
        case "rock":
            if(computerSelection === "scissors") {
                alert("You win!");
                userScore++;
            } else if(computerSelection === "paper") {
                alert(`You lose! ${capitalizeString(computerSelection)} beats ${userSelection}.`);
                computerScore++;
            } else {
                alert("It's a tie.");
            }
            break;
        case "paper":
            if(computerSelection === "rock") {
                alert("You win!");
                userScore++;
            } else if(computerSelection === "scissors") {
                alert(`You lose! ${capitalizeString(computerSelection)} beats ${userSelection}.`);
                computerScore++;
            } else {
                alert("It's a tie.");
            }
            break;
        case "scissors":
            if(computerSelection === "paper") {
                alert("You win!");
                userScore++;
            } else if(computerSelection === "rock") {
                alert(`You lose! ${capitalizeString(computerSelection)} beats ${userSelection}.`);
                computerScore++;
            } else {
                alert("It's a tie.");
            }
            break;
        default:
            alert("Please try again.");
    }
}

function capitalizeString(string) {
    const firstLetter = string.slice(0, 1).toUpperCase();
    const length = string.length;
    return `${firstLetter + string.slice(1)}`;
}

function game() {
    for(let i = 0; i < 5; i++) {
        playOneRound('', computerPlay());
        console.log(`User ${userScore} vs Computer ${computerScore}`);
    };
    console.log(`Final score: User ${userScore} vs Computer ${computerScore}.`);
    userScore = 0;
    computerScore = 0;
}

game();