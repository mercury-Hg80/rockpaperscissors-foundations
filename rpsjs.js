/* Call function to make choice of 3 parameters */
/* Function must determine relationship of parameter to number */
/* Through random number generator (aka Math.random()) will invoke a parameter */
/* Math.random() method will return a number >= to 0 or < 1 */


function getComputerChoice(){
    
    let randomNumber = Math.random();

    if (randomNumber < 0.30) {
        return "rock" 
    }
    
    else if (randomNumber < 0.60) {
        return "paper"
    }

    else {
        return "scissors"
    }
    

    
    }


/* Prompt for user input of their guess 
Use a function that brings userInput against computer choice */


function getHumanChoice() {

    let userInput = prompt("enter: rock, paper, or scissors")
    console.log("you chose:", userInput)


}

let humanScore = 0;
let computerScore = 0;

/* Organize rock paper scissor game by hands played */
/* Score will go up by increments of 1 depending on winner */
/* humanChoice will be case insensitive */
/* Set conditions for winner and loser return responses */
/* WHEN YOU WORK ON THIS NEXT, MOVE THE SCORES INTO THE FUNCTIONS */

function playRound(humanChoice, computerChoice) {

    humanChoice.toLowerCase()
    
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        return "You lose! Paper beats rock." 
    }
    

    else if (humanChoice === 'rock' && computerChoice === 'rock') {
        return "Same response! No one wins a point."
    }

    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        return "You win! Rock beats scissors."
    }

    else if (humanChoice === 'paper' && computerChoice === 'paper') {
        return "Same response! No one wins a point."
    }

    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        return "You win! Paper beats rock."
    }

    else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++;
        return "You lose! Scissors beats paper."
    }

    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return "You win! Scissors beats paper"
    }
    

    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++
        return "You lose! Rock beats scissors."
    }

    else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        return "Same response! No one wins a point."
    }

    else {
        humanScore += 1;
        compScore += 1;
        return "Tie!"
    }


}

function playGame() {
    function playRound()

}


    
    








