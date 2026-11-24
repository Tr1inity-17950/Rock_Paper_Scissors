//players scores global variables
let humanScore= 0
let computerScore= 0


/*OBTAIN Computer choice
RETURN "Rock", "Paper" or "Scissors"
TEST return with console.log()*/

//Computer randomized choice
function getComputerChoice () {
    let randomChoice = Math.floor(Math.random() * 3) + 1

    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else {
        return "scissors"
    }
}

/*OBTAIN human choice
UTILIZE prompt to get user input
CHECK the Return with console.log()*/

//Human prompted choice
function getHumanChoice () {
    let humanChoice = prompt ("Choose between Rock, Paper or Scissors");
    return humanChoice.toLowerCase()
}

/*WRITE logic for a single round
USE computer choice and human choice as parameters
Show the winner through console.log()
INCREMENT humanScore or ComputerScore based on the winner*/

//Single round
function playRound(humanChoice, computerChoice) {
    switch (playRound) {
        case humanChoice === computerChoice:
            return console.log("Both " + humanChoice + ", is a tie!");
            break;
        case humanChoice === "rock" && computerChoice === "paper":
            computerScore++;
            return console.log("You lose! Paper beats Rock");
            break;
        case humanChoice === "scissors" && computerChoice === "rock":
            computerScore++;
            return console.log("You lose! Rock beats Scissors");
            break;
        case humanChoice === "paper" && computerChoice === "scissors":
            computerScore++;
            return console.log("You Lose! Scissors beats Paper");
            break;
        case humanChoice === "rock" && computerChoice === "scissors":
            humanScore++;
            return console.log("You Win! Rock beats Scissors");
            break;
        case humanChoice === "scissors" && computerChoice === "paper":
            humanScore++;
            return console.log("You win! Scissors beats Paper");
            break;
        case humanChoice === "paper" && computerChoice === "rock":
            humanScore++;
            return console.log("You win! Paper beats Rock");
            break;
        default:
            return console.log("Invalid answer!")
            break;
    }
    
    /*if (humanChoice===computerChoice) {
        return console.log("Both " + humanChoice + ", is a tie!")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore ++;
        return console.log("You lose! Paper beats Rock")
    } else if */
}