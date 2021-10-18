const board = document.querySelector(".gameboard")
const resetButton = document.querySelector("#reset")

const gameBoard =(() => {
  let player = 0
  let played = []
  let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  let checkRow = (row) => {
    if (row[0] == row[1] && row[1] == row[2])
    {return true}
    return false
  }


  let changeClass = (square) => {
    if (!(played.includes(square.dataset.index)) && !(checkBoard())){
    const img = square.childNodes[0]
    img.src = player % 2 == 0 ? 'cross.svg' : 'circle.svg';
    img.classList.add(player % 2 == 0 ? "red" : "blue");
    played.push(square.dataset.index)
    board[square.dataset.index] = player % 2 == 0 ? "X" : "O"
    player++
    console.log([checkBoard(), board])
    }
  }

  let reset = () => {
    played = []
    player = 0
    board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const squares = document.querySelectorAll(".square")
    for (i=0; i<squares.length; i++){
      squares[i].childNodes[0].src ='blank.svg'
      squares[i].childNodes[0].setAttribute("class", "")
    }
  }

  let checkBoard = () => {
    if (
    checkRow(board.slice(0,3)) ||
    checkRow(board.slice(3,6)) ||
    checkRow(board.slice(6,9)) ||
    checkRow([board[0], board[4], board[8]]) ||
    checkRow([board[2], board[4], board[6]]) ||
    checkRow([board[0], board[3], board[6]]) ||
    checkRow([board[1], board[4], board[7]]) ||
    checkRow([board[2], board[5], board[8]]) ){
      return true
    }
    return false
  }

  return {changeClass, reset, checkBoard}
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
