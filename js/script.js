var playerOne;
var playerTwo;
var result;

let setPlayerOne = (val) => {
    playerOne = val;
    let setPlayerTwo = () => {
        playerTwo = Math.random();
        if (playerTwo >= 0 && playerTwo <= 0.33) {
            return playerTwo = "rock";
        }
        else if (playerTwo > 0.33 && playerTwo <= 0.66){
            return playerTwo = "paper";
        }
        else {
            return playerTwo = "scissors";
        }  
    }
    setPlayerTwo();
    let game = () => {
        if (playerOne === "rock" && playerTwo === "scissors" || playerOne === "paper" && playerTwo === "rock" || playerOne === "scissors" && playerTwo === "paper"){
          return result = document.getElementById('result').innerHTML = "You picked " + playerOne + " and the computer picked " + playerTwo + ". You win!";
        }
        else if (playerOne === playerTwo){
          return result = document.getElementById('result').innerHTML =  "You picked " + playerOne + " and the computer picked " + playerTwo + ". It's a tie!";
        }
        else if (playerOne == null || playerOne == undefined) {
          return result = document.getElementById('result').innerHTML = "You didn't pick";
        }
        else {
            return result = document.getElementById('result').innerHTML = "You picked " + playerOne + " and the computer picked " + playerTwo + ". You lose!";
        }
    }
    game();
}

let reset = () => {
    return result = document.getElementById('result').innerHTML = "";
}

let date = new Date(Date.now());
let year = date.getFullYear();

function getDate () {
    let copyright = document.getElementById('copyright').innerHTML = year + " Copyright | All Rights Reserved. Designed by <a href='http://www.saromsa.com' target='_blank'>SaRomSa";
}; 
getDate();
