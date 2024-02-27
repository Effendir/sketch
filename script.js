const container = document.querySelector(".container");

function addGridSquare(squaresNumber) {
  for (let i = 0; i < squaresNumber * squaresNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.height = `${(500 / squaresNumber) - 1.2}px`;
    div.style.width = `${(500 / squaresNumber) - 1.2}px`;
    container.appendChild(div);
  }
}


function changeSquareColor(color) {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.classList.add(color);
    });
  });
}

addGridSquare(20);
changeSquareColor("blue");
