const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

    const formattedPlayerSelection = playerSelection.toLowerCase();

    if (formattedPlayerSelection === computerSelection.toLowerCase()) {
        resultDisplay.textContent = "It's a tie!";
    } else if (
        (formattedPlayerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (formattedPlayerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (formattedPlayerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        resultDisplay.textContent = `You win! ${formattedPlayerSelection} beats ${computerSelection}.`;
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        resultDisplay.textContent = `You lose! ${computerSelection} beats ${formattedPlayerSelection}.`;
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

}

//const playerSelection = 'Rock';
//const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));
/* function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Choose Rock, Paper or Scissors: `);
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${round}: ${result}`);

        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lose the game.");
    } else {
        console.log("It's a tie!");
    }

    console.log(`Final Scores -> Player: ${playerScore} | Computer: ${computerScore}`);
} 

game(); */

document.getElementById('rock-button').addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
});

document.getElementById('paper-button').addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
});

document.getElementById('scissors-button').addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
});