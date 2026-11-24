//players scores global variables
let humanScore= 0
let computerScore= 0

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

//Human prompted choice
function getHumanChoice () {
    let humanChoice = prompt ("Choose between Rock, Paper or Scissors");
    return humanChoice.toLowerCase()
}

//Single round
function playRound(humanChoice, computerChoice) {
    switch (true) {
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
}
 
//Logic for the entire game
function playGame(){
    let humanChoice;
    let computerChoice;
    let totalRounds = 1;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + totalRounds);
        totalRounds++;

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound (humanChoice, computerChoice);
        console.log("Your Score: " + humanScore + " || Computer Score: " + computerScore);
    }

    let winner = "";
        if (humanScore > computerScore){
            winner = "player";
        } else {
            winner = "computer";
        }

    console.log(`Winner: ${winner}`);
}

playGame()