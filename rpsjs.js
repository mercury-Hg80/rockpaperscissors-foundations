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

let userInput = prompt("rock, paper, scissor!")

function getHumanChoice() {

    







}







