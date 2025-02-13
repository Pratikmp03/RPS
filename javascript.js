

function getComputerChoice(){
    let choice = Math.floor(Math.random()* 3);
    switch (choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    let userChoice = prompt("Please Enter Rock, Paper or Scissors");
    let response = userChoice.toLowerCase();
    if(response === "scissors" || response === "paper" || response === "rock"){
        console.log("You chose " + response + "!");
        return response;
    }
    else{
        return console.log("Error : Please enter 'Rock', 'Paper' or 'Scissors'");
    }
}

    let humanScore = 0;
    let computerScore = 0;

  
function playRound(){
  
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if(humanChoice === computerChoice){
        return console.log("Its a draw!");
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
            return console.log("Player wins! Computer picked paper. Scissor cuts paper. Player score is now " + humanScore + ".");
    }
    else if(computerChoice === "scissors" && humanChoice === "paper"){
            computerScore++;
            return console.log("Computer wins! Computer picked Scissors. Scissor cuts paper. Computer score is now " + computerScore + ".");
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            return console.log("Player wins! Computer picked scissors. Rock beats scissor. Player score is now " + humanScore + ".");
    }
    else if(computerChoice === "rock" && humanChoice === "scissors"){
            computerScore++;
            return console.log("Computer wins! Computer picked rock. Rock beats scissor. Computer score is now " + computerScore + ".");
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            return console.log("Player wins! Computer picked rock. Paper wraps rock. Player score is now " + humanScore + ".");
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
            computerScore++;
            return console.log("Computer wins! Computer picked paper. Paper wraps rock. Computer score is now " + computerScore + ".");
    }
        
    }

     function playGame(){
        for (let i = 0; i < 5; i++) {
            playRound();
        }
               
    if(computerScore > humanScore){
        console.log("Computer wins the game!");
    }
    else if(humanScore > computerScore){
        console.log("Player wins the game!");
    }
    else if(humanScore === computerScore){
        console.log("Its a tie! both players win!");
    }

}
    playGame();


