function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getHumanChoice() {
    humanChoice = prompt("Choose: \"rock\" | \"paper\" | \"scissors\"")

    if (humanChoice === "rock") {
        return "rock";
    }
    else if (humanChoice === "paper") {
        return "paper";
    }
    else if (humanChoice === "scissors") {
        return "scissors";
    }
    else {
        return "Invalid response";
    }
}