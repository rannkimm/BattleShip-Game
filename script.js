///////// GLOBAL VARIABLES /////////
let restart = document.querySelector(".restart")
let board = document.querySelector(".board")
let boxes = document.querySelectorAll(".cell")
let hitCount = document.querySelector(".hitcount")
let missCount = document.querySelector(".misscount")
let shotCount = document.querySelector(".shotcount")
let dimage = document.querySelector('.destroyer')
let simage = document.querySelector('.submarine')
let cimage = document.querySelector('.cruiser')
let bimage = document.querySelector('.battleship')
let aimage = document.querySelector('.carrier')
let dtext = document.querySelector('.dtext')
let stext = document.querySelector('.stext')
let ctext = document.querySelector('.ctext')
let btext = document.querySelector('.btext')
let atext = document.querySelector('.atext')
let dbox = document.querySelector('.dbox')
let sbox = document.querySelector('.sbox')
let cbox = document.querySelector('.cbox')
let bbox = document.querySelector('.bbox')
let abox = document.querySelector('.abox')
let dCounter = 0
let sCounter = 0
let cCounter = 0
let bCounter = 0
let aCounter = 0



let randomBoards = () => {
  let boardNumber = Math.floor(Math.random() * 4)
  if (boardNumber === 0) {
    boxes[1].dataset.cell = "d"
    boxes[2].dataset.cell = "d"
    boxes[26].dataset.cell = "s"
    boxes[37].dataset.cell = "s"
    boxes[48].dataset.cell = "s"
    boxes[117].dataset.cell = "c"
    boxes[118].dataset.cell = "c"
    boxes[119].dataset.cell = "c"
    boxes[120].dataset.cell = "c"
    boxes[77].dataset.cell = "b";
    boxes[78].dataset.cell = "b";
    boxes[79].dataset.cell = "b";
    boxes[80].dataset.cell = "b";
    boxes[81].dataset.cell = "b";
    boxes[70].dataset.cell = "a";
    boxes[71].dataset.cell = "a";
    boxes[72].dataset.cell = "a";
    boxes[73].dataset.cell = "a";
    boxes[74].dataset.cell = "a";
    boxes[75].dataset.cell = "a";
  } else if (boardNumber === 1) {
    boxes[102].dataset.cell = "d";
    boxes[113].dataset.cell = "d";
    boxes[34].dataset.cell = "s";
    boxes[45].dataset.cell = "s";
    boxes[56].dataset.cell = "s";
    boxes[5].dataset.cell = "c";
    boxes[6].dataset.cell = "c";
    boxes[7].dataset.cell = "c";
    boxes[8].dataset.cell = "c";
    boxes[60].dataset.cell = "b";
    boxes[71].dataset.cell = "b";
    boxes[82].dataset.cell = "b";
    boxes[93].dataset.cell = "b";
    boxes[104].dataset.cell = "b";
    boxes[38].dataset.cell = "a";
    boxes[39].dataset.cell = "a";
    boxes[40].dataset.cell = "a";
    boxes[41].dataset.cell = "a";
    boxes[42].dataset.cell = "a";
    boxes[43].dataset.cell = "a";
  } else if (boardNumber === 2) {
    boxes[99].dataset.cell = "d";
    boxes[100].dataset.cell = "d";
    boxes[11].dataset.cell = "s";
    boxes[22].dataset.cell = "s";
    boxes[33].dataset.cell = "s";
    boxes[7].dataset.cell = "c";
    boxes[18].dataset.cell = "c";
    boxes[29].dataset.cell = "c";
    boxes[40].dataset.cell = "c";
    boxes[55].dataset.cell = "b";
    boxes[56].dataset.cell = "b";
    boxes[57].dataset.cell = "b";
    boxes[58].dataset.cell = "b";
    boxes[59].dataset.cell = "b";
    boxes[27].dataset.cell = "a";
    boxes[38].dataset.cell = "a";
    boxes[49].dataset.cell = "a";
    boxes[60].dataset.cell = "a";
    boxes[71].dataset.cell = "a";
    boxes[82].dataset.cell = "a";
  } else if (boardNumber === 3) {
    boxes[62].dataset.cell = "d";
    boxes[63].dataset.cell = "d";
    boxes[44].dataset.cell = "s";
    boxes[45].dataset.cell = "s";
    boxes[46].dataset.cell = "s";
    boxes[79].dataset.cell = "c";
    boxes[90].dataset.cell = "c";
    boxes[101].dataset.cell = "c";
    boxes[112].dataset.cell = "c";
    boxes[13].dataset.cell = "b";
    boxes[14].dataset.cell = "b";
    boxes[15].dataset.cell = "b";
    boxes[16].dataset.cell = "b";
    boxes[17].dataset.cell = "b";
    boxes[10].dataset.cell = "a";
    boxes[21].dataset.cell = "a";
    boxes[32].dataset.cell = "a";
    boxes[43].dataset.cell = "a";
    boxes[54].dataset.cell = "a";
    boxes[65].dataset.cell = "a";
  }
  console.log(boardNumber)
};

// init function to reset game ==> put inside game function //

const init = () => {
  hitCount.innerHTML = "0"
  missCount.innerHTML = "0"
  shotCount.innerHTML = "50"
  dCounter = 0
  sCounter = 0
  cCounter = 0
  bCounter = 0
  aCounter = 0
  dimage.style.opacity = '1'
  dtext.style.opacity = '1'
  dbox.style.borderColor = 'black'
  simage.style.opacity = '1'
  stext.style.opacity = '1'
  sbox.style.borderColor = 'black'
  cimage.style.opacity = '1'
  ctext.style.opacity = '1'
  cbox.style.borderColor = 'black'
  bimage.style.opacity = '1'
  btext.style.opacity = '1'
  bbox.style.borderColor = 'black'
  aimage.style.opacity = '1'
  atext.style.opacity = '1'
  abox.style.borderColor = 'black'
 document.querySelector(".message").innerHTML = "";
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].dataset.cell = 'sq'
    boxes[i].style.backgroundColor = "";
    boxes[i].innerHTML = "";
    console.log(boxes[i].dataset.cell)
  }
};

// win condition function //

const winCondition = () => {
  if (hitCount.innerHTML === "20") {
    let winPrompt = prompt("You Win! Play again? Y/N");
    if (winPrompt === "Y") {
      startGame();
    }
  } else if (shotCount.innerHTML === "0") {
    let losePrompt = prompt("You Lose! Play again? Y/N");
    if (losePrompt === "Y") {
      startGame();
    }
  }
};

// shot indicator function to put inside event listener in the game function //

const shotIndicator = (e) => {
  if (e.target.dataset.cell === "d") {
    e.target.innerHTML = "x";
    e.target.style.backgroundColor = "red";
    hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1;
    shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1;
    dCounter += 1;
    console.log("d", dCounter);
    if (dCounter === 2) {
      document.querySelector(".message").innerHTML = "You sunk the DESTROYER!";
      dimage.style.opacity = '0'
      dtext.style.opacity = '0'
      dbox.style.borderColor = 'red'
    } else {
        document.querySelector(".message").innerHTML = "";
    }
    winCondition();
  } else if (e.target.dataset.cell === "s") {
    e.target.innerHTML = "x";
    e.target.style.backgroundColor = "red";
    hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1;
    shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1;
    sCounter += 1;
    console.log("s", sCounter);
    if (sCounter === 3) {
      document.querySelector(".message").innerHTML = "You sunk the SUBMARINE!";
      simage.style.opacity = '0'
      stext.style.opacity = '0'
      sbox.style.borderColor = 'red'
    } else {
        document.querySelector(".message").innerHTML = "";
    }
    winCondition();
  } else if (e.target.dataset.cell === "c") {
    e.target.innerHTML = "x";
    e.target.style.backgroundColor = "red";
    hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1;
    shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1;
    cCounter += 1;
    console.log("c", cCounter);
    if (cCounter === 4) {
      document.querySelector(".message").innerHTML = "You sunk the CRUISER!";
      cimage.style.opacity = '0'
      ctext.style.opacity = '0'
      cbox.style.borderColor = 'red'
    } else {
        document.querySelector(".message").innerHTML = "";
    }
    winCondition();
  } else if (e.target.dataset.cell === "b") {
    e.target.innerHTML = "x";
    e.target.style.backgroundColor = "red";
    hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1;
    shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1;
    bCounter += 1;
    console.log("b", bCounter);
    if (bCounter === 5) {
      document.querySelector(".message").innerHTML = "You sunk the BATTLESHIP!";
      bimage.style.opacity = '0'
      btext.style.opacity = '0'
      bbox.style.borderColor = 'red'
    } else {
        document.querySelector(".message").innerHTML = "";
    }
    winCondition();
  } else if (e.target.dataset.cell === "a") {
    e.target.innerHTML = "x";
    e.target.style.backgroundColor = "red";
    hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1;
    shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1;
    aCounter += 1;
    console.log("a", aCounter);
    if (aCounter === 6) {
      document.querySelector(".message").innerHTML = "You sunk the CARRIER!";
      aimage.style.opacity = '0'
      atext.style.opacity = '0'
      abox.style.borderColor = 'red'
    } else {
        document.querySelector(".message").innerHTML = "";
    }
    winCondition();
  } else {
    e.target.style.backgroundColor = "black";
    missCount.innerHTML = parseInt(missCount.innerHTML) + 1;
    shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1;
    document.querySelector(".message").innerHTML = "";
    winCondition();
  }
};

// restart button event listener //

restart.addEventListener("click", () => {
  console.log("i called restart");
  startGame();
});


// game function //

startGame = () => {
  init();
  randomBoards();
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", shotIndicator, { once: true });

  }
};

startGame();
