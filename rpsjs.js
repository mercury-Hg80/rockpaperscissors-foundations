/* Call function to make choice of 3 parameters */
/* Function must determine relationship of parameter to number */
/* Through random number generator (aka Math.random()) will invoke a parameter */
/* Math.random() method will return a number >= to 0 or < 1 */


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
    

    
    


/* Prompt for user input of their guess 
Use a function that brings userInput against computer choice



function getHumanChoice(){

    let userInput = prompt("enter: rock, paper, or scissors").toLowerCase();
    console.log("you chose:", userInput);
    return userInput;


}


/* Organize rock paper scissor game by hands played */
/* Score will go up by increments of 1 depending on winner */
/* humanChoice will be case insensitive */
/* Set conditions for winner and loser return responses */
/* WHEN YOU WORK ON THIS NEXT, MOVE THE SCORES INTO THE FUNCTIONS */


/*Create playGame function */
/* Embed playRound() function into playGame() */

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

/*Before submitting, RE-WRITE ALL PSEUDOCODE
Figure out why you used what you used
Go over all concepts for strings and functions
Watch the functions youtube video */









