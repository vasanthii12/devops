// scripts.js
const choices = ["rock", "paper", "scissors"];
let player1Score = 0;
let player2Score = 0;
let username = "Player"; // Default username

document.querySelectorAll('.choice').forEach(choice => {
  choice.addEventListener('click', function() {
    const playerChoice = this.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
    updateScore(result);
  });
});

function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player1";
  } else {
    return "player2";
  }
}

function displayResult(player, computer, result) {
  username = document.getElementById("username").value || "Player";
  alert(`${username} chose ${player}\nComputer chose ${computer}\n\n${result === "draw" ? "It's a draw!" : (result === "player1" ? `${username} wins!` : "Computer wins!")}`);
}

function updateScore(result) {
  if (result === "player1") {
    player1Score++;
    document.getElementById("score").classList.add("win");
    setTimeout(() => {
      document.getElementById("score").classList.remove("win");
    }, 300);
  } else if (result === "player2") {
    player2Score++;
    document.getElementById("score").classList.add("lose");
    setTimeout(() => {
      document.getElementById("score").classList.remove("lose");
    }, 300);
  }

  document.getElementById("score").textContent = `${username}: ${player1Score} - Computer: ${player2Score}`;
}
