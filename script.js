let playerPoints = 0;
let computerPoints = 0;
let roundWinner = '';
let playerSelection = '';



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



function badChoice() {
    console.log('Unrecognized Answer');
}

function playRound(playerSelection, computerSelection) {
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

    const givePlayerPoints = playerPoints;
    const giveComputerPoints = computerPoints;
    let pickedByPlayer = '';
    let pickedByComputer = '';

    document.getElementById('pScore').innerHTML = givePlayerPoints;
    document.getElementById('cScore').innerHTML = giveComputerPoints;
    document.getElementById('playPlay').innerHTML = playerSelection;
    document.getElementById('comPlay').innerHTML = computerSelection;

    if (playerSelection == 'FIRE') {
        document.getElementById('playPlay').style.color = "red";
    } else if (playerSelection == 'WATER') {
        document.getElementById('playPlay').style.color = "blue";
    } else if (playerSelection == 'GRASS') {
        document.getElementById('playPlay').style.color = "green";
    }
    if (computerSelection == 'FIRE') {
        document.getElementById('comPlay').style.color = "red";
    } else if (computerSelection == 'WATER') {
        document.getElementById('comPlay').style.color = "blue";
    } else if (computerSelection == 'GRASS') {
        document.getElementById('comPlay').style.color = "green";
    }
}

function game() {
    playRound();

    if (playerPoints == 5 || computerPoints == 5) {
        gameOver();
    }
}

function gameOver() {
    console.log('GAME OVER!');
    if (playerPoints === computerPoints) {
        console.log('TIE');
        document.getElementById('showWinner').innerHTML = 'tie';
    } else if (playerPoints > computerPoints) {
        console.log('Player Wins!');
        document.getElementById('showWinner').innerHTML = 'player';
    } else {
        console.log('Computer Wins!');
        document.getElementById('showWinner').innerHTML = 'computer';
    }
    resetPoints();
}

function resetPoints() {
    playerPoints = 0;
    computerPoints = 0;
    document.getElementById('showWinner').innerHTML = ' ';
}

function choseFire() {
    console.log('Fire');
    game();
    return true;
}

function choseWater() {
    console.log('Water');
    game();
    return true;
}

function choseGrass() {
    console.log('Grass');
    game();
    return true;
}