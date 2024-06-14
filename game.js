let cards = ["rock","paper","scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice () {
    x = getRandomInt(3);
    return cards[x];
}

function getHumanChoice() {
    return prompt("Choose between rock, paper and scissors.");
}


function playGame() {
    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock") {
            if (computerChoice == "paper"){
                computerScore ++;
                return console.log("You loose, paper covers rock.");
            }
            else if (computerChoice == "scissors") {
                humanScore ++;
                return console.log("You won, rock crushes scissors.");
            }
            else {
                return console.log("Draw.")
            }
        }
    
        else if (humanChoice == "paper") {
            if (computerChoice == "scissors"){
                computerScore ++;
                return console.log("You loose, scissors cut paper.");
            }
            else if (computerChoice == "rock") {
                humanScore ++;
                return console.log("You won, paper covers rock.");
            }
            else {
                return console.log("Draw.")
            }
        }
    
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock"){
                computerScore ++;
                return console.log("You loose, rock crushes scissors.");
            }
            else if (computerChoice == "paper") {
                humanScore ++;
                return console.log("You won, scissors cut paper.");
            }
            else {
                return console.log("Draw.")
            }
        }
    }

    for (let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        humanSelection = humanSelection.toLowerCase();

        playRound(humanSelection,computerSelection);
    }

    if (humanScore > computerScore) {
        return console.log("You won the game",humanScore,"to",computerScore,"!")
    }
    else if (computerScore > humanScore){
        return console.log("You loose the game",humanScore,"to",computerScore,"!")
    }
    else {
        return console.log("Equality!",humanScore,"to",computerScore,".")
    }

}

console.log(playGame());