"use strict";

/*
// Draw a line across the winning 3 in a row.
// Play a sound when a winner is declared.
// Set a time limit for turn and show a count down timer. If they miss their turn then randomly assign them a block.
// Incorporate graphic XOs to add style.
// Show a winning image when a winner is declared.
// Add styling and colors to make it look good.
*/

let boxNum,
  gameInput,
  activePlayer,
  playing,
  matrix1,
  matrix0,
  counter,
  xTotal,
  oTotal,
  timer,
  mainMatrix,
  count;

const winingLine = document.querySelector(".win-line");
const winner = document.querySelector(".winner-banner");
const xCounter = document.querySelector("#x-counter");
const oCounter = document.querySelector("#o-counter");
const cheering = document.querySelector("#cheer-sound");
const booing = document.querySelector("#boo-sound");
const timerDisplay = document.querySelector("#timer");

const buttons = [];
for (let i = 1; i <= 10; i++) {
  buttons.push(document.querySelector(`#brd-btn-${i}`));
}

const countdown = function () {
  if (timer > 1) {
    timer--;
    timerDisplay.textContent = timer;
    stopTimer();
    count = setTimeout(countdown, 1000);
  } else if (timer === 1) {
    randomBox();
  }
};

const stopTimer = function () {
  clearInterval(count);
};

const init = function () {
  playing = true;
  activePlayer = 1;
  gameInput = "X";
  mainMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  matrix1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  matrix0 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  counter = 0;
  xTotal = 0;
  oTotal = 0;
  xCounter.textContent = xTotal;
  oCounter.textContent = oTotal;
  winner.textContent = "";
  winingLine.removeAttribute("id");
  timer = 11;
  timerDisplay.textContent = timer;
  countdown();
};
init();

const randomBox = function () {
  let index;
  const indicies = [];
  for (let i = 0; i < mainMatrix.length; i++) {
    if (mainMatrix[i] === 0) {
      indicies.push(i);
    }
  }
  index = indicies[[Math.floor(Math.random() * indicies.length)]];
  boxNum = [index + 1];
  updateUI();
  playerMatixUpdate();
  playerChange();
};

const checkWin = function (selectedMatrix, count) {
  if (selectedMatrix[0] === 1) {
    if (selectedMatrix[1] + selectedMatrix[2] === 2) {
      winingLine.id = "row1win";
      playing = false;
    }
    if (selectedMatrix[3] + selectedMatrix[6] === 2) {
      winingLine.id = "column1win";
      playing = false;
    }
    if (selectedMatrix[4] + selectedMatrix[8] === 2) {
      winingLine.id = "diagTLBR";
      playing = false;
    }
  }
  if (selectedMatrix[3] === 1) {
    if (selectedMatrix[4] === 1) {
      if (selectedMatrix[5] === 1) {
        winingLine.id = "row2win";
        playing = false;
      }
    }
  }
  if (selectedMatrix[6] === 1) {
    if (selectedMatrix[7] === 1) {
      if (selectedMatrix[8] === 1) {
        winingLine.id = "row3win";
        playing = false;
      }
    }
  }
  if (selectedMatrix[1] === 1) {
    if (selectedMatrix[4] === 1) {
      if (selectedMatrix[7] === 1) {
        winingLine.id = "column2win";
        playing = false;
      }
    }
  }
  if (selectedMatrix[2] === 1) {
    if (selectedMatrix[5] + selectedMatrix[8] === 2) {
      winingLine.id = "column3win";
      playing = false;
    }
    if (selectedMatrix[4] + selectedMatrix[6] === 2) {
      winingLine.id = "diagTRBL";
      playing = false;
    }
  }
  if (count === 9 && playing) {
    winner.textContent = "No Winner, Play Again!";
    stopTimer();
    booing.play();
  }
};

const updateUI = function () {
  document.querySelector(`#sel-${boxNum}`).style.visibility = "visible";
  document.querySelector(`#brd-btn-${boxNum}`).style.visibility = "hidden";
  document.querySelector(`#text-${boxNum}`).textContent = gameInput;
};

const playerMatixUpdate = function () {
  if (activePlayer === 1) {
    matrix1[boxNum - 1] = 1;
    mainMatrix[boxNum - 1] = 1;
    counter++;
    checkWin(matrix1, counter);
    timer = 11;
    timerDisplay.textContent = timer;
    countdown();
    if (!playing) {
      winner.textContent = "X's Win!";
      cheering.play();
      xTotal++;
      xCounter.textContent = xTotal;
      timerDisplay.textContent = 0;
      stopTimer();
    }
  } else if (activePlayer === 0) {
    matrix0[boxNum - 1] = 1;
    mainMatrix[boxNum - 1] = 1;
    counter++;
    checkWin(matrix0, counter);
    timer = 11;
    timerDisplay.textContent = timer;
    countdown();
    if (!playing) {
      winner.textContent = "O's Win!";
      cheering.play();
      oTotal++;
      oCounter.textContent = oTotal;
      timerDisplay.textContent = 0;
      stopTimer();
    }
  }
};

const playerChange = function () {
  if (activePlayer === 0) {
    gameInput = "X";
    activePlayer = 1;
  } else {
    gameInput = "O";
    activePlayer = 0;
  }
};

document.querySelector("#clear-board").addEventListener("click", function () {
  const btnDivSelect = document.getElementsByClassName("board-btn-div");
  const selDiv = document.getElementsByClassName("selection-div");
  for (let i = 0; i < 9; i++) {
    btnDivSelect[i].style.visibility = "visible";
    selDiv[i].style.visibility = "hidden";
  }
  playing = true;
  activePlayer = 1;
  gameInput = "X";
  mainMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  matrix1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  matrix0 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  counter = 0;
  xCounter.textContent = xTotal;
  oCounter.textContent = oTotal;
  winner.textContent = "";
  winingLine.removeAttribute("id");
  timer = 10;
  timerDisplay.textContent = timer;
});

document.querySelector("#new-game").addEventListener("click", function () {
  const btnDivSelect = document.getElementsByClassName("board-btn-div");
  const selDiv = document.getElementsByClassName("selection-div");
  for (let i = 0; i < 9; i++) {
    btnDivSelect[i].style.visibility = "visible";
    selDiv[i].style.visibility = "hidden";
  }
  init();
});

for (let i = 0; i < buttons.length - 1; i++) {
  buttons[i].addEventListener("click", function () {
    if (playing) {
      boxNum = [i + 1];
      updateUI();
      playerMatixUpdate();
      playerChange();
    }
  });
}
