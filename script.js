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

function buttonClicked() {

}

let humanScore = 0;
let computerScore = 0;
let roundWinner = "default";

const buttons = document.querySelector(".button-container").querySelectorAll("button");
const resultList = document.querySelector(".results");
const roundResult = document.createElement("p");
const humanScoreboard = document.createElement("p");
const computerScoreboard = document.createElement("p");

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
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                roundWinner = "The player";
            } else {
                roundWinner = "The computer";
            }
            document.querySelector(".button-container").style.display = "none";
            document.querySelector(".round-result").style.display = "initial";
            document.querySelector(".round-result").textContent = `A score of 5 was reached! ${roundWinner} is the winner!`;
            document.querySelector(".reset-button").style.display = "initial";
        }
    })
});

document.querySelector(".reset-button").addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    document.querySelector(".reset-button").style.display = "none";
    document.querySelector(".round-result").style.display = "none";
    document.querySelector(".button-container").style.display = "flex";
})