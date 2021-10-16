const board = document.querySelector(".gameboard")

const gameBoard =(() => {
  let player = 0

  let changeClass = (square) => {
    square.classList.add(player % 2 ? 'cross' : 'circle')
    square.classList.remove(player % 2 ? 'circle' : 'cross')
    player++
    console.log(player)
  }

  return {changeClass}
})()



for (i = 0; i < 9; i++) {
  const square = document.createElement("div")
  square.setAttribute("class", "square")
  square.setAttribute("onclick", "gameBoard.changeClass(this)")
  board.appendChild(square)
}
