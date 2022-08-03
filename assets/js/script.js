
/* Código desenvolvido por Diego Vicente Pereira */

let numerator = document.querySelector("#numerator");
let denominator = document.querySelector("#denominator");

let button = document.querySelector("button");
let screen = document.querySelector("canvas");
let brushTool = screen.getContext("2d");

drawSquare = (x, y, color) => {
  brushTool.fillStyle = color;
  brushTool.fillRect(x, y, 50, 50);
  brushTool.strokeStyle = "black";
  brushTool.strokeRect(x, y, 50, 50);
};

fraction = (denominator, numerator) => {
  for (let i = 0; i < denominator; i += 50) {
    drawSquare(i + 200, 0, "white");
  }
  for (let j = 1; j < numerator; j += 50) {
    drawSquare(j + 200, 0, "green");
  }
};

clearScreen = () => {
  brushTool.clearRect(0, 0, 600, 400);
};

calculateFraction = (d, n) => {
  clearScreen();
  fraction((d * 100) / 2, (n * 100) / 2);
};

show = () => {
  calculateFraction(denominator.value, numerator.value);
};

button.addEventListener("click", show);
