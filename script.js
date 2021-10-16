const board = document.querySelector(".board")

for (i = 0; i < 9; i++) {
  const square = document.createElement("div")
  square.setAttribute("class", "square")
  board.appendChild(square)
}
