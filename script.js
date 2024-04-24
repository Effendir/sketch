const gridsContainer = document.querySelector(".grids-container");
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
let gridSize = 30;

function addGridSquare(squaresNumber) {
  for (let i = 0; i < squaresNumber * squaresNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.height = `${(700 / squaresNumber)}px`;
    div.style.width = `${(700 / squaresNumber)}px`;
    gridsContainer.appendChild(div);
  }
  changeSquareColor(currentColor);
  changeSquareColorOnClick(currentColor);
  indicatorButton.innerText = `Grid size ${gridSize.toString()} x ${gridSize.toString()}`
}

function changeSquareColorOnClick(color) {
  const squares = document.querySelectorAll(".grid-square");
  let isMouseDown = false;
  document.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
      if (isMouseDown) {
        square.classList.remove("white", "red", "orange", "yellow", "green", "cyan", "blue", "violet");
        square.classList.add(color);
      }
    });
  });
}

function changeSquareColor(color) {
  indicatorButton.classList.remove("red", "orange", "yellow", "green", "cyan", "blue", "violet", "white");
  indicatorButton.classList.add(color);
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach(square => {
    square.addEventListener("click", () => {
      square.classList.remove("red", "orange", "yellow", "green", "cyan", "blue", "violet", "white");
      square.classList.add(color);
    });
  });
}

increaseGridSizeButton.addEventListener("click", () => {
  gridsContainer.innerHTML = "";
  if (gridSize === 50) {
    increaseGridSizeButton.classList.add("disabled");
    addGridSquare(gridSize);
    changeSquareColor(currentColor);
  } else {
    decreaseGridSizeButton.classList.remove("disabled");
    increaseGridSizeButton.classList.remove("disabled");
    gridSize += 10;
    addGridSquare(gridSize);
    changeSquareColor(currentColor);
    if (gridSize === 50) {
      increaseGridSizeButton.classList.add("disabled");
    }
  }
})

decreaseGridSizeButton.addEventListener("click", () => {
  gridsContainer.innerHTML = "";
  if (gridSize === 10) {
    decreaseGridSizeButton.classList.add("disabled");
    addGridSquare(gridSize);
    changeSquareColor(currentColor);
  } else {
    decreaseGridSizeButton.classList.remove("disabled");
    increaseGridSizeButton.classList.remove("disabled");
    gridSize -= 10;
    addGridSquare(gridSize);
    changeSquareColor(currentColor);
    if (gridSize === 10) {
      decreaseGridSizeButton.classList.add("disabled");
    }
  }
})

clearButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach(square => {
    square.classList.remove("red", "orange", "yellow", "green", "cyan", "blue", "violet");
    square.classList.add("white");
  });
})

eraserButton.addEventListener("click", () => {
  changeSquareColor("white");
  changeSquareColorOnClick("white");
  currentColor = "white";
})

redButton.addEventListener("click", () => {
  changeSquareColor("red");
  changeSquareColorOnClick("red");
  currentColor = "red";
})

orangeButton.addEventListener("click", () => {
  changeSquareColor("orange");
  changeSquareColorOnClick("orange");
  currentColor = "orange";
})

yellowButton.addEventListener("click", () => {
  changeSquareColor("yellow");
  changeSquareColorOnClick("yellow");
  currentColor = "yellow";
})

greenButton.addEventListener("click", () => {
  changeSquareColor("green");
  changeSquareColorOnClick("green");
  currentColor = "green";
})

cyanButton.addEventListener("click", () => {
  changeSquareColor("cyan");
  changeSquareColorOnClick("cyan");
  currentColor = "cyan";
})

blueButton.addEventListener("click", () => {
  changeSquareColor("blue");
  changeSquareColorOnClick("blue");
  currentColor = "blue";
})

violetButton.addEventListener("click", () => {
  changeSquareColor("violet");
  changeSquareColorOnClick("violet");
  currentColor = "violet";
})

addGridSquare(gridSize);
