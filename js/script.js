let result = document.querySelector("#result");
let playerTwo;

function setPlayerTwo() {
  playerTwo = Math.random();
  if (playerTwo >= 0 && playerTwo <= 0.33) {
    return (playerTwo = "rock");
  } else if (playerTwo > 0.33 && playerTwo <= 0.66) {
    return (playerTwo = "paper");
  } else {
    return (playerTwo = "scissors");
  }
}

function resetGame() {
  result.innerHTML = "";
}

function playGame(event) {
  event.preventDefault();
  let playerOne = event.target.id;
  playerTwo = setPlayerTwo();
  if (
    (playerOne === "rock" && playerTwo === "scissors") ||
    (playerOne === "paper" && playerTwo === "rock") ||
    (playerOne === "scissors" && playerTwo === "paper")
  ) {
    result.innerHTML = `You picked ${playerOne} and the computer picked ${playerTwo}. You win!`;
  } else if (playerOne === playerTwo) {
    result.innerHTML = `You picked ${playerOne} and the computer picked ${playerTwo}. It was a draw!`;
  } else {
    result.innerHTML = `You picked ${playerOne} and the computer picked ${playerTwo}. You lose!`;
  }
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", resetGame);

let rock = document.querySelector("#rock");
rock.addEventListener("click", playGame);

let paper = document.querySelector("#paper");
paper.addEventListener("click", playGame);

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playGame);

let date = new Date(Date.now());
let year = date.getFullYear();
let footer = document.querySelector("#footer");
footer.innerHTML = `2020 - ${year} Copyright | All Rights Reserved. Designed by <a href='http://www.saromsa.com' target='_blank'>SaRomSa</a>`;
