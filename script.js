const container = document.querySelector(".container");
const indicatorButton = document.querySelector(".indicator");
const clearButton = document.querySelector(".clear");
const eraserButton = document.querySelector(".eraser");
const increaseGridSizeButton = document.querySelector(".increase-grid-size");
const decreaseGridSizeButton = document.querySelector(".decrease-grid-size");
const redButton = document.querySelector(".red");
const orangeButton = document.querySelector(".orange");
const yellowButton = document.querySelector(".yellow");
const greenButton = document.querySelector(".green");
const cyanButton = document.querySelector(".cyan");
const blueButton = document.querySelector(".blue");
const violetButton = document.querySelector(".violet");
let currentColor = "red";
let gridSize = 10;

function addGridSquare(squaresNumber) {
  for (let i = 0; i < squaresNumber * squaresNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.height = `${(500 / squaresNumber)}px`;
    div.style.width = `${(500 / squaresNumber)}px`;
    container.appendChild(div);
  }
  changeSquareColor(currentColor);
}

function changeSquareColor(color) {
  indicatorButton.classList.remove("white");
  indicatorButton.classList.remove("red");
  indicatorButton.classList.remove("orange");
  indicatorButton.classList.remove("yellow");
  indicatorButton.classList.remove("green");
  indicatorButton.classList.remove("cyan");
  indicatorButton.classList.remove("blue");
  indicatorButton.classList.remove("violet");
  indicatorButton.classList.add(color);
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.classList.remove("white");
      square.classList.remove("red");
      square.classList.remove("orange");
      square.classList.remove("yellow");
      square.classList.remove("green");
      square.classList.remove("cyan");
      square.classList.remove("blue");
      square.classList.remove("violet");
      square.classList.add(color);
    });
  });
}

increaseGridSizeButton.addEventListener("click", () => {
  container.innerHTML = "";
  if (gridSize === 50) {
    gridSize = gridSize;
  } else {
    gridSize += 10;
  }
  addGridSquare(gridSize);
  changeSquareColor(currentColor);
})

decreaseGridSizeButton.addEventListener("click", () => {
  container.innerHTML = "";
  if (gridSize === 10) {
    gridSize = gridSize;
  } else {
    gridSize -= 10;
  }
  addGridSquare(gridSize);
  changeSquareColor(currentColor);
})

clearButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach(square => {
    square.classList.remove("red");
    square.classList.remove("orange");
    square.classList.remove("yellow");
    square.classList.remove("green");
    square.classList.remove("cyan");
    square.classList.remove("blue");
    square.classList.remove("violet");
    square.classList.add("white");
  });
})

eraserButton.addEventListener("click", () => {
  changeSquareColor("white");
  currentColor = "white";
})

redButton.addEventListener("click", () => {
  changeSquareColor("red");
  currentColor = "red";
})

orangeButton.addEventListener("click", () => {
  changeSquareColor("orange");
  currentColor = "orange";
})

yellowButton.addEventListener("click", () => {
  changeSquareColor("yellow");
  currentColor = "yellow";
})

greenButton.addEventListener("click", () => {
  changeSquareColor("green");
  currentColor = "green";
})

cyanButton.addEventListener("click", () => {
  changeSquareColor("cyan");
  currentColor = "cyan";
})

blueButton.addEventListener("click", () => {
  changeSquareColor("blue");
  currentColor = "blue";
})

violetButton.addEventListener("click", () => {
  changeSquareColor("violet");
  currentColor = "violet";
})

addGridSquare(gridSize);
