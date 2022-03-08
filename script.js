///////// GLOBAL VARIABLES /////////
let board = document.querySelector('.board')
board = [
    0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,
]
let destroyer = ['x', 'x']
let submarine = ['x', 'x', 'x']
let cruiser = ['x', 'x', 'x', 'x']
let battleship = ['x', 'x', 'x', 'x', 'x']
let carrier = ['x', 'x', 'x', 'x', 'x', 'x']

createBoard = (name) => {
    for(let i = 0; i < name.length; i++)
    name.splice([i], 2, destroyer[0], destroyer[1])
    // name.splice()
    console.log(name)
}

createBoard(board)