let choices = ["rock", "paper", "scissors"];

let computerChoice = choices[Math.floor(Math.random() * choices.length)];

document.getElementById("rock").addEventListener("click", function () {
  if (computerChoice === "rock") {
    document.getElementById("result").textContent = "It's a tie!";
  } else if (computerChoice === "paper") {
    document.getElementById("result").textContent =
      "you lose! paper covers rock ";
  } else {
    document.getElementById("result").textContent =
      "You win! Rock crushes Scissors.";
  }
});

document.getElementById("paper").addEventListener("click", function () {
  if (computerChoice === "paper") {
    document.getElementById("result").textContent = "It's a tie!";
  } else if (computerChoice === "scissors") {
    document.getElementById("result").textContent =
      "You lose! Scissors cuts Paper.";
  } else {
    document.getElementById("result").textContent =
      "You win! Paper covers Rock ";
  }
});

document.getElementById("scissors").addEventListener("click", function () {
  if (computerChoice === "scissors") {
    document.getElementById("result").textContent = " It's a tie ";
  } else if (computerChoice === "Rock") {
    document.getElementById("result").textContent =
      " You lose! Rock crushes scissors ";
  } else {
    document.getElementById("result").textContent =
      " You win! Scissors cuts paper ";
  }
});
