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
    console.log(play);
}