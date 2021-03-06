const startButton = document.getElementById('start')
const score = document.getElementById('score')
const grid = document.querySelector('.grid')
let squares = []
let currentSnake = [2,1,0]
let direction = 1

function createGrid() {
    for(let i=0 ; i < 100 ; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)
    }
}

createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move() {
    let tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0]+direction)
    squares[currentSnake[0]].classList.add('snake')
}

move()

setInterval(move, 1000)

