//The Odin Project
//Rock-Paper-Scissors

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
            } else {
                (computerSelection === "rock") ? alert("It's a tie") : alert("You lose!");
            }
            break;
        case "paper":
            if(computerSelection === "rock") {
                alert("You win!");
            } else {
                (computerSelection === "paper") ? alert("It's a tie") : alert("You lose!");
            }
            break;
        case "scissors":
            if(computerSelection === "paper") {
                alert("You win!");
            } else {
                (computerSelection === "scissors") ? alert("It's a tie") : alert("You lose!");
            }
            break;
    }
    console.log(computerSelection);
}

playOneRound("", computerPlay());