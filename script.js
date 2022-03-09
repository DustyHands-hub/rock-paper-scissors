let playerPoints = 0;
let computerPoints = 0;
let roundWinner = '';



function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);

    switch (computerSelection) {
        case 0:
            return 'WATER'
        case 1:
            return 'FIRE'
        case 2: 
            return 'GRASS'
    }
}


function playerPlay() {
    let playerSelection = prompt('Choose your element');
    playerSelection = playerSelection.toUpperCase();

    switch (playerSelection) {
        case 'FIRE':
            return 'FIRE'
        case 'WATER':
            return 'WATER'
        case 'GRASS':
            return 'GRASS'
        default:
            return badChoice()
    }
}

function badChoice() {
    console.log('Unrecognized Answer');
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();

    console.log(`Player played ${playerSelection}`);
    console.log(`Computer played ${computerSelection}`);

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
        console.log('Tied!');
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

    let givePlayerPoints = playerPoints;
    let giveComputerPoints = computerPoints;
    document.getElementById('pScore').innerHTML = givePlayerPoints;
    document.getElementById('cScore').innerHTML = giveComputerPoints;
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