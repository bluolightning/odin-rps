function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0 :
            return "rock";
        case 1 :
            return "paper";
        case 2 :
            return "scissors";
    }
}

function getHumanChoice() {
    switch(prompt("Choose: \"rock\" | \"paper\" | \"scissors\"").toLowerCase()) {
        case "rock" :
            return "rock";
        case "paper" :
            return "paper";
        case "scissors" :
            return "scissors";
        default :
            return "Invalid response";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Invalid response") {
        roundResult.textContent = ("Invalid player response");
    } else if (humanChoice === computerChoice) {
        roundResult.textContent = ("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock"
    ) {
        roundResult.textContent = (`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++
    } else {
        roundResult.textContent = (`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++
    }
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector(".container").querySelectorAll("button");
const resultList = document.querySelector("ul");
const roundResult = document.createElement("li");
const scoreBoard = document.createElement("li");

resultList.appendChild(roundResult);
resultList.appendChild(scoreBoard);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(`${button.className}`, getComputerChoice());
        scoreBoard.textContent = (`Scoreboard:\n  Player: ${humanScore}\n  Computer: ${computerScore}`);
    })
});