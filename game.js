let cards = ["rock","paper","scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice () {
    x = getRandomInt(3);
    return cards[x];
}

humanSelection = "";
humanScore = 0;
computerScore = 0;


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanSelection = button.id;
        playRound(humanSelection,getComputerChoice());
    })
})

const scores = document.querySelector("#scores");

scores.setAttribute("style", "white-space: pre;")

function writeScores(){
    if (humanScore == 5) {
        document.getElementById("scores").textContent = `Your score : ${humanScore} // Computer score : ${computerScore} \r\n YOU WIN!!`
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        document.getElementById("scores").textContent = `Your score : ${humanScore} // Computer score : ${computerScore} \r\n YOU LOOSE!!`
        humanScore = 0;
        computerScore = 0;
    }
    else {
        return document.getElementById("scores").textContent = `Your score : ${humanScore} // Computer score : ${computerScore}`

    }
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock") {
        if (computerChoice == "paper"){
            computerScore ++;
            writeScores();
            return console.log("You loose, paper covers rock.");
        }
        else if (computerChoice == "scissors") {
            humanScore ++;
            writeScores();
            return console.log("You won, rock crushes scissors.");
        }
        else {
            return console.log("Draw.")
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors"){
            computerScore ++;
            writeScores();
            return console.log("You loose, scissors cut paper.");
        }
        else if (computerChoice == "rock") {
            humanScore ++;
            writeScores();
            return console.log("You won, paper covers rock.");
        }
        else {
            return console.log("Draw.")
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock"){
            computerScore ++;
            writeScores();
            return console.log("You loose, rock crushes scissors.");
        }
        else if (computerChoice == "paper") {
            humanScore ++;
            writeScores();
            return console.log("You won, scissors cut paper.");
        }
        else {
            return console.log("Draw.")
        }
    }
}