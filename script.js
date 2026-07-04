let results = JSON.parse(localStorage.getItem("score")) || {
  Win: 0,
  Lose: 0,
  Tie: 0,
};

updateScore();

function playGame(playerMove) {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (
    randomNumber >= 1 / 3 &&
    randomNumber < 2 / 3
  ) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissor";
  }

  let result = "";

  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
      results.Tie++;
    } else if (computerMove === "Paper") {
      result = "You Lose!";
      results.Lose++;
    } else {
      result = "You Win!";
      results.Win++;
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win!";
      results.Win++;
    } else if (computerMove === "Paper") {
      result = "Tie";
      results.Tie++;
    } else {
      result = "You Lose!";
      results.Lose++;
    }
  } else if (playerMove === "Scissor") {
    if (computerMove === "Rock") {
      result = "You Lose!";
      results.Lose++;
    } else if (computerMove === "Paper") {
      result = "You Win!";
      results.Win++;
    } else {
      result = "Tie";
      results.Tie++;
    }
  }

  // Score save in localStorage
  localStorage.setItem("score", JSON.stringify(results));

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML =
    `You chose <img src="images/${playerMove}.png" width="50">. 
    Computer chose <img src="images/${computerMove}.png" width="50">.`;

  updateScore();
}

function updateScore() {
  document.querySelector(".js-score").innerHTML = `
  Wins: ${results.Win}, 
  Losses: ${results.Lose}, 
  Ties: ${results.Tie}
`;
}

function ResetScore() {
  results.Win = 0;
  results.Lose = 0;
  results.Tie = 0;

  // Reset localStorage too
  localStorage.setItem("score", JSON.stringify(results));
  updateScore();

  alert("Score is Reset!");
}
