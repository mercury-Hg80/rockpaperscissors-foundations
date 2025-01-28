

function getComputerChoice() {

    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock"; 
    }
    
    else if (randomNumber < 0.66) {
        return "paper";
    }

    else {
        return "scissors";
    }

}
    
/* playGame(), 2 variables containing humanScore and computerScore starting at 0
playRound() function will be embedded w/ parameters humanChoice& computerChoice
if statement with humanChoice === computerChoice will return "Same response! etc..."
else if (statement with all conditions of humanChoice === value && computerChoice === value)
humanScore and computerScore counters that go up by increments of 1 that return win or loss.
computerScore++ will reside in else statement if humanChoice parameter picks wrong 
*/
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
        return `You lose! ${humanChoice} beats ${computerChoice}.` ;

       }
    }

    /*Loop runs 5 times, 5 rounds.

    i is a counter that starts at 0 and goes up by 1 after each round
    human and computer will make a choice each round, stored in humanChoice and computerChoice variable
    playRound function compares the humanChoice and computerChoice
    after each round the current score after each round is displayed via console

    */
       
    for (let i = 0; i< 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);

    }

    /*Score comparisons managed via if else statements
    2 sets, humanScore > computerScore, humanScore < computerScore.
    last else statement for computerScore === humanScore then print "it's a tie"
    So if neither condition is true, then else { console.log("it's a tie!")}

    */


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










