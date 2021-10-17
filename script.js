const board = document.querySelector(".gameboard")
const resetButton = document.querySelector("#reset")

const gameBoard =(() => {
  let player = 0
  let played = []
  let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  let changeClass = (square) => {
    if (!(played.includes(square.dataset.index))){
    const img = square.childNodes[0]
    img.src = player % 2 == 0 ? 'cross.svg' : 'circle.svg'
    img.classList.add(player % 2 == 0 ? "red" : "blue")
    played.push(square.dataset.index)
    board[square.dataset.index] = player % 2 == 0 ? "X" : "O"
    player++
    console.log(board)
    }
  }

  let reset = () => {
    played = []
    player = 1
    const squares = document.querySelectorAll(".square")
    for (i=0; i<squares.length; i++){
      squares[i].childNodes[0].src ='blank.svg'
    }
  }
  return {changeClass, reset}
})()

resetButton.setAttribute("onclick", "gameBoard.reset()")

for (i = 0; i < 9; i++) {
  const square = document.createElement("div")
  const img = document.createElement("img")
  square.setAttribute("class", "square")
  square.setAttribute("onclick", "gameBoard.changeClass(this)")
  square.dataset.index = i
  img.src = "blank.svg"
  img.dataset.index = i
  board.appendChild(square)
  square.appendChild(img)
}
