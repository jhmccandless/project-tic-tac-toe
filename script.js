"use strict";

/////////////philippes way///////////
// for (let i = 1; i <= 9; ++i) {
//   const buttonId = "#btn-" + i;
//   document.querySelector(buttonId).addEventListener("click", () => {
//     const areaId = "#sel-" + i;
//     document.querySelector(areaId).style.visibility = "visible";

//     const parentId = "#brd-btn-" + i;
//     document.querySelector(parentId).style.visibility = "hidden";
//   });
// }
let boxNum, gameInput, activePlayer, playing, matrix1, matrix0, counter;

const button1 = document.querySelector("#brd-btn-1");
const button2 = document.querySelector("#brd-btn-2");
const button3 = document.querySelector("#brd-btn-3");
const button4 = document.querySelector("#brd-btn-4");
const button5 = document.querySelector("#brd-btn-5");
const button6 = document.querySelector("#brd-btn-6");
const button7 = document.querySelector("#brd-btn-7");
const button8 = document.querySelector("#brd-btn-8");
const button9 = document.querySelector("#brd-btn-9");
const winingLine = document.querySelector(".win-line");
const winner = document.querySelector(".winner-banner");

const init = function () {
  activePlayer = 1;
  gameInput = "X";
  matrix1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  matrix0 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  playing = true;
  counter = 0;
  winner.textContent = "";
  winingLine.removeAttribute("id");
};
init();

const checkWin = function (selectedMatrix, count) {
  if (count == 9) {
    winner.textContent = "No Winner, Play Again!";
  } else if (selectedMatrix[0] === 1) {
    if (selectedMatrix[1] === 1) {
      if (selectedMatrix[2] === 1) {
        winingLine.id = "row1win";
        playing = false;
      }
    } else if (selectedMatrix[3] === 1) {
      if (selectedMatrix[6] === 1) {
        winingLine.id = "column1win";
        playing = false;
      }
    } else if (selectedMatrix[4] === 1) {
      if (selectedMatrix[8] === 1) {
        winingLine.id = "diagTLBR";
        playing = false;
      }
    }
  } else if (selectedMatrix[3] === 1) {
    if (selectedMatrix[4] === 1) {
      if (selectedMatrix[5] === 1) {
        winingLine.id = "row2win";
        playing = false;
      }
    }
  } else if (selectedMatrix[6] === 1) {
    if (selectedMatrix[7] === 1) {
      if (selectedMatrix[8] === 1) {
        winingLine.id = "row3win";
        playing = false;
      }
    }
  } else if (selectedMatrix[1] === 1) {
    if (selectedMatrix[4] === 1) {
      if (selectedMatrix[7] === 1) {
        winingLine.id = "column2win";
        playing = false;
      }
    }
  } else if (selectedMatrix[2] === 1) {
    if (selectedMatrix[5] === 1) {
      if (selectedMatrix[8] === 1) {
        winingLine.id = "column3win";
        playing = false;
      }
    } else if (selectedMatrix[4] === 1) {
      if (selectedMatrix[6] === 1) {
        winingLine.id = "diagTRBL";
        playing = false;
      }
    }
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
    counter++;
    checkWin(matrix1, counter);
    if (!playing) {
      winner.textContent = "X's Win!";
    }
  } else {
    matrix0[boxNum - 1] = 1;
    counter++;
    checkWin(matrix0, counter);
    if (!playing) {
      winner.textContent = "O's Win!";
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

document.querySelector("#new-game").addEventListener("click", function () {
  const btnDivSelect = document.getElementsByClassName("board-btn-div");
  const selDiv = document.getElementsByClassName("selection-div");
  for (let i = 0; i < 9; i++) {
    btnDivSelect[i].style.visibility = "visible";
    selDiv[i].style.visibility = "hidden";
  }
  init();
});

button1.addEventListener("click", function () {
  if (playing) {
    boxNum = 1;
    updateUI();
    playerMatixUpdate();
    playerChange();
  }
});
button2.addEventListener("click", function () {
  if (playing) {
    boxNum = 2;
    updateUI();
    playerMatixUpdate();
    playerChange();
  }
});
button3.addEventListener("click", function () {
  if (playing) {
    boxNum = 3;
    updateUI();
    playerMatixUpdate();
    playerChange();
  }
});
button4.addEventListener("click", function () {
  if (playing) {
    boxNum = 4;
    updateUI();
    playerMatixUpdate();
    playerChange();
  }
});
button5.addEventListener("click", function () {
  if (playing) {
    boxNum = 5;
    updateUI();
    playerMatixUpdate();
    playerChange();
  }
});
button6.addEventListener("click", function () {
  if (playing) {
    boxNum = 6;
    updateUI();
    playerMatixUpdate();
    playerChange();
  }
});
button7.addEventListener("click", function () {
  if (playing) {
    boxNum = 7;
    updateUI();
    playerMatixUpdate();
    playerChange();
  }
});
button8.addEventListener("click", function () {
  if (playing) {
    boxNum = 8;
    updateUI();
    playerMatixUpdate();
    playerChange();
  }
});
button9.addEventListener("click", function () {
  if (playing) {
    boxNum = 9;
    updateUI();
    playerMatixUpdate();
    playerChange();
  }
});
