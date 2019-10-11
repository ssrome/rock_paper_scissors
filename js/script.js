var playerOne;
var playerTwo;
var result;
var rock = '<i class="fas fa-hand-rock"></i>';
var paper = '<i class="fas fa-hand-paper"></i>';
var scissors = '<i class="fas fa-hand-scissors"></i>';


let setPlayerOne = (val) => {
    if (val === "rock"){
         playerOne = rock;
    }
    else if (val === "paper"){
         playerOne = paper;
    }
    else if (val === "scissors") {
         playerOne = scissors;
    }

    let setPlayerTwo = () => {
        playerTwo = Math.random();
        if (playerTwo >= 0 && playerTwo <= 0.33) {
            return playerTwo = rock;
        }
        else if (playerTwo > 0.33 && playerTwo <= 0.66){
            return playerTwo = paper;
        }
        else {
            return playerTwo = scissors;
        }  
    }
    setPlayerTwo();
    let game = () => {
        var picked = "You picked " + playerOne + " and the computer picked " + playerTwo;
        if (playerOne === rock && playerTwo === scissors || playerOne === paper && playerTwo === rock || playerOne === scissors && playerTwo === paper){
          return result = document.getElementById('result').innerHTML = picked + "<p>You win!</p>";
        }
        else if (playerOne === playerTwo){
          return result = document.getElementById('result').innerHTML =  picked + "<p>It's a tie!</p>";
        }
        else if (playerOne == null || playerOne == undefined) {
          return result = document.getElementById('result').innerHTML = "You didn't pick";
        }
        else {
            return result = document.getElementById('result').innerHTML = picked + "<p>You lose!</p>";
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
