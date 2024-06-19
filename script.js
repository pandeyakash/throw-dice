const button = document.querySelector("button");

const container1 = document.querySelector(".box-1 .score-number");
const container2 = document.querySelector(".box-2 .score-number");
const container3 = document.querySelector(".box-3 .score-number");

const winner = document.querySelector(".winner");

let score1;
let score2;
let score3;

button.addEventListener("click", () => {
  score1 = rollDie();
  score2 = rollDie();
  score3 = rollDie();
  let arr = [score1, score2, score3].sort((a, b) => {
    return b - a;
  });

  console.log(arr);

  container1.textContent = score1;
  container2.textContent = score2;
  container3.textContent = score3;

  findWinner();

  container1.classList.remove("green", "yellow", "red", "blue");
  container2.classList.remove("green", "yellow", "red", "blue");
  container3.classList.remove("green", "yellow", "red", "blue");

  changeColor(score1, container1, arr);
  changeColor(score2, container2, arr);
  changeColor(score3, container3, arr);

  equalColorChange();
});

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function findWinner() {
  if (score1 > score2 && score1 > score3) {
    displayWinner(score1, "A");
  } else if (score2 > score1 && score2 > score3) {
    displayWinner(score2, "B");
  } else {
    displayWinner(score3, "C");
  }
}

function displayWinner(score, name) {
  winner.textContent = "";
  const scoreNumber = document.createElement("div");
  scoreNumber.textContent = score;
  scoreNumber.classList.add("score-number");
  const scoreName = document.createElement("div");
  scoreName.textContent = name;
  scoreName.classList.add("score-name");

  winner.append(scoreNumber, scoreName);
}

function changeColor(score, container, arr) {
  if (score === arr[0]) {
    container.classList.add("green");
  } else if (score === arr[1]) {
    // container.classList.remove("yellow");
    container.classList.add("yellow");
  } else if (score === arr[2]) {
    // container.classList.remove("red");
    container.classList.add("red");
  }
}

function equalColorChange() {
  if (score1 === score2 && score2 === score3) {
    container1.classList.add("blue");
    container2.classList.add("blue");
    container2.classList.add("blue");
  } else if (score1 === score2) {
    container1.classList.add("blue");
    container2.classList.add("blue");
  } else if (score1 === score3) {
    container1.classList.add("blue");
    container3.classList.add("blue");
  } else if (score2 === score3) {
    container2.classList.add("blue");
    container3.classList.add("blue");
  }
}
