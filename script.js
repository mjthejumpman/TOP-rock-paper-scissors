let humanScore = 0;
let computerScore = 0;
    
function playRound() {

    let valid = false

    while (!valid) {


        function getComputerChoice() {
            let randomNumber = Math.random();

            console.log(randomNumber);

            if (randomNumber < 0.33) {
                compChoice = "Rock" ;
            } else if (randomNumber > 0.66) {
                compChoice = "Paper";
            } else {
                compChoice = "Scissors";
            }
            
            return compChoice.toLowerCase();
        }

        function getHumanChoice() {
            choice = prompt("Please enter your choice: Rock, Paper or Scissors: ");
            return choice.toLowerCase();

        }

        let compSel = getComputerChoice();
        let humanSel = getHumanChoice();

        switch(humanSel + "-" + compSel) {
            case "rock-scissors":
                console.log("You win!");
                humanScore ++;
                count++
                valid = true;
                break;
            case "scissors-paper":
                console.log("You win!");
                humanScore ++;
                count++
                valid = true;
                break;
            case "paper-rock":
                console.log("You win!");
                humanScore ++;
                count++
                valid = true;
                break;
            case "scissors-rock":
                console.log("You lose!");
                computerScore ++;
                count++
                valid = true;
                break;
            case "paper-scissors":
                console.log("You lose!");
                computerScore ++;
                count++
                valid = true;
                break;
            case "rock-paper":
                console.log("You lose!");
                computerScore ++;
                count++
                valid = true;
                break;
            case "rock-rock":
                console.log("Draw!");
                valid = false;
                break;
            case "paper-paper":
                console.log("Draw!");
                valid = false;
                break;
            case "scissors-scissors":
                console.log("Draw!");
                valid = false;
                break;
            default:
                console.log("Invalid choice. Try again.")
                valid = false;
                break;
        }
    }

    
    console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`);
    console.log("Rounds played: " + count);
}



let playAgain = true;
let count = 0;

while (playAgain) {
    count = 0
    while(count < 5) {
        playRound();
    }

    let answer = null;
    while (answer !== "y" && answer !== "n" ) {
        answer = prompt("Would you like to play again? y/n: ").toLowerCase();
        switch (answer) {
            case "y":
                console.log("Okay, let's play again!")
                playAgain = true;
                count = 0
                break;
            case "n":
                console.log("Thank you for playing!")
                playAgain = false;
                break;
            default:
                alert("invalid input. Please type 'y' or 'n'.");
                answer = undefined;
        }
    }
}