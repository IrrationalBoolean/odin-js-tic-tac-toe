const board = document.querySelector(".gameboard")
const resetButton = document.querySelector("#reset")

const gameBoard =(() => {
  let player = 1
  let played = []

  let changeClass = (square) => {
    if (!(played.includes(square.dataset.index))){
    console.log(square.childNodes[0])
    square.childNodes[0].src = player % 2 ? 'cross.svg' : 'circle.svg'
    played.push(square.dataset.index)
    player++
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
