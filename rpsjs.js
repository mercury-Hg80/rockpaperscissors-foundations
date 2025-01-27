

function getComputerChoice() {

    let randomNumber = Math.random();

    if (randomNumber < 0.30) {
        return "rock"; 
    }
    
    else if (randomNumber < 0.60) {
        return "paper";
    }

    else {
        return "scissors";
    }

}
    



function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    function playRound (humanChoice, computerChoice) {

       if (humanChoice === computerChoice) {
        return "Same response! No one wins a point.";
       } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
       ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
        
       } else {
        computerScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.` ;

       }
    }
       
    for (let i = 0; i< 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);

    }



    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!"); 
    } else { 
        console.log("It's a tie!");
    }

        
        

    playRound();
    

}


playGame();










