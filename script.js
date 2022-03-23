const PlayerXchoice = document.querySelector("#PlayerXchoice");
const Computerchoice = document.querySelector("#Computerchoice");
const result = document.querySelector("#result");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => choice.addEventListener("click", choiceHandler));

function choiceHandler() {
    PlayerXchoice.innerHTML = this.innerHTML;
    ComputerchoiceHandler();
    chooseWinnerHandler();
}

function ComputerchoiceHandler() {
    const comchoice = Math.floor(Math.random() * choices.length);

    if (comchoice === 0) {
        Computerchoice.innerHTML = "Yellow";
    } else if (comchoice === 1) {
        Computerchoice.innerHTML = "Blue";
    } else {
        Computerchoice.innerHTML = "Red";
    }
    }

    function chooseWinnerHandler(){
        //draw cases
        if (PlayerXchoice.innerHTML === "Yellow" && Computerchoice.innerHTML === "Yellow") {
            result.innerHTML = "You Tie";

        }
        if  (PlayerXchoice.innerHTML === "Blue" && Computerchoice.innerHTML === "Blue") {
            result.innerHTML = "You Tie";
        }

        if (
            PlayerXchoice.innerHTML === "Red" && Computerchoice.innerHTML === "Red"
            ) {

            result.innerHTML = "You Tie";
        }

        //Lose cases
        if (PlayerXchoice.innerHTML === "Yellow" && Computerchoice.innerHTML === "Blue"){
            result.innerHTML = "You Lose";
        }

        if(
            PlayerXchoice.innerHTML === "Blue" && Computerchoice.innerHTML === "Red"){
            result.innerHTML = "You Lose";
        }

        if(
            PlayerXchoice.innerHTML === "Red" && Computerchoice.innerHTML === "Yellow"){
            result.innerHTML = "You Lose";
        }

        //win cases

        if (
            PlayerXchoice.innerHTML === "Yellow" && Computerchoice.innerHTML === "Red" 
        ) {
            result.innerHTML = "You win";
        }

        if 
        (PlayerXchoice.innerHTML === "Blue" && Computerchoice.innerHTML === "Yellow"){
            result.innerHTML = "You win";
        }  
 
        if 
        (PlayerXchoice.innerHTML === "Red" && Computerchoice.innerHTML === "Blue"){
            result.innerHTML = "You win";
        } 
    }
