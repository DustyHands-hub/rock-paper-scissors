let playerPoints = 0;
let computerPoints = 0;
let roundWinner = '';

function computerPlay() {
    let rndInt = Math.floor(Math.random() * 3);
    switch (rndInt) {
        case 0:
            return 'WATER'
        case 1:
            return 'FIRE'
        case 2: 
            return 'GRASS'
    }
}

let computerSelection = computerPlay();
function playRound(playerSelection, computerSelection) {
    playerPlay();
    computerPlay();
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (
        (playerSelection === 'WATER' && computerSelection === 'FIRE') ||
        (playerSelection === 'FIRE' && computerSelection === 'GRASS') ||
        (playerSelection === 'GRASS' && computerSelection === 'WATER')
        ) {
            playerPoints++;
            roundWinner = 'player';
            console.log('Player Wins!');
        }
        if (
        (computerSelection === 'WATER' && playerSelection === 'FIRE') ||
        (computerSelection === 'FIRE' && playerSelection === 'GRASS') ||
        (computerSelection === 'GRASS' && playerSelection === 'WATER')
        ) {
            computerPoints++;
            roundWinner = 'computer';
            console.log('Computer Wins!');
        }
    console.log(`Player: ${playerPoints} Computer: ${computerPoints}`);
}

function playerPlay() {
    let playerSelection = prompt('Choose your element');
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    gameOver()
}

function gameOver() {
    console.log('GAME OVER!');
    if (playerPoints === computerPoints) {
        console.log('TIE');
    } else if (playerPoints > computerPoints) {
        console.log('Player Wins!');
    } else {
        console.log('Computer Wins!');
    }
}