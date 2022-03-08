let playerPoints = 0;
        let computerPoints = 0;
        let roundWinner = '';

        function playRound(playerSelection, computerSelection) {
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
                }
                if (
                (computerSelection === 'WATER' && playerSelection === 'FIRE') ||
                (computerSelection === 'FIRE' && playerSelection === 'GRASS') ||
                (computerSelection === 'GRASS' && playerSelection === 'WATER')
                ) {
                    computerPoints++;
                    roundWinner = 'computer';
                }
            updateScore(roundWinner, playerSelection, computerSelection);
        }

        function computerPlay() {
            let rndInt = Math.floor(Math.random() * 3)
            switch (rndInt) {
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
            console.log(playerSelection);
        }

        function gameOver() {
            return playerPoints === 5 || computerPoints === 5
        }

        console.log(computerPlay());