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
    switch(prompt("Choose: \"rock\" | \"paper\" | \"scissors\"")) {
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

let humanScore = 0,
    computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Invalid response") {
        console.log("Invalid player response");
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++
    }
}

