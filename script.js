// RGB Colors

//Variables
let previewBtnEl = document.getElementById("previewBtn");
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbstringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
let heightInEl = document.getElementById("height-in");
let widthInEl = document.getElementById("width-in");
//Event Listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
heightInEl.addEventListener("change", changeSize);
widthInEl.addEventListener("change", changeSize);
//Event function
function rgbPreview() {
  //Input get red green blu values
  let rValue = redInEl.value;
  let gValue = greenInEl.value;
  let bValue = blueInEl.value;

  //Validate Colors (Constrain colors between 0 -255)
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }

  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  //Process
  let rgbString = "rgb(" + rValue + "," + gValue + "," + bValue + ")";

  // Output : display rgb string and update the color preview
  rgbstringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}
function changeSize() {
  //Input
  let width = widthInEl.value;
  let height = heightInEl.value;
  // Validate
  if (width < 50) {
    width = 50;
  } else if (width > 400) {
    width = 400;
  }

  if (height < 50) {
    height = 50;
  } else if (height > 200) {
    height = 200;
  }
  //Output
  displayEl.style.width = width + "px";
  displayEl.style.height = height + "px";
}

//Black Button
document.getElementById("blackBtn").addEventListener("click", blackBtnClicked);

function blackBtnClicked() {
  //process
  let black = "rgb(0, 0, 0)";
  //output
  document.getElementById("rgbTxt").innerHTML = black;
  document.getElementById("display").style.background = black;
}
//White Button
document.getElementById("whiteBtn").addEventListener("click", whiteBtnClicked);

function whiteBtnClicked() {
  //process
  let white = "rgb(255, 255 ,255)";
  document.getElementById("rgbTxt").innerHTML = white;
  document.getElementById("display").style.background = white;
}
