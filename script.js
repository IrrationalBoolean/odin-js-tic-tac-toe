const board = document.querySelector(".gameboard")

const gameBoard =(() => {
  let player = 1
  let played = []



  let changeClass = (square) => {
    if (!(played.includes(square.dataset.index))){
    square.classList.add(player % 2 ? 'cross' : 'circle')
    square.classList.remove(player % 2 ? 'circle' : 'cross')
    played.push(square.dataset.index)
    player++
    }
  }

  return {changeClass}
})()



for (i = 0; i < 9; i++) {
  const square = document.createElement("div")
  square.setAttribute("class", "square")
  square.setAttribute("onclick", "gameBoard.changeClass(this)")
  square.dataset.index = i
  board.appendChild(square)
}
