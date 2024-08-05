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

const buttons = document.querySelector(".button-container").querySelectorAll("button");
const resultList = document.querySelector("ul");
const roundResult = document.createElement("li");
const humanScoreboard = document.createElement("li");
const computerScoreboard = document.createElement("li");

resultList.appendChild(roundResult);
resultList.appendChild(humanScoreboard);
resultList.appendChild(computerScoreboard);

roundResult.textContent = "Play a round to see the result!";
humanScoreboard.textContent = "Player Score: 0";
computerScoreboard.textContent = "Computer Score: 0";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(`${button.className}`, getComputerChoice());
        humanScoreboard.textContent = `Player Score: ${humanScore}`;
        computerScoreboard.textContent = `Computer Score: ${computerScore}`;
    })
});