//The Odin Project
//Rock-Paper-Scissors

let userScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll('.btns');

btns.forEach(b => {
    b.addEventListener('click', () => {
        playOneRound(b.textContent, computerPlay());
        console.log(`User ${userScore} vs Computer ${computerScore}`);

        if(userScore == 5 || computerScore == 5) {
            if(userScore > computerScore) alert('You won the game!');
            else alert('You lost the game!');
        
            userScore = 0;
            computerScore = 0;
        }
    });
});

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

    switch(userSelection) {
        case "Rock":
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
        case "Paper":
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
        case "Scissors":
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