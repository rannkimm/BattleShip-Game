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
let destroyer = ['d', 'd']
let submarine = ['s', 's', 's']
let cruiser = ['c', 'c', 'c', 'c']
let battleship = ['b', 'b', 'b', 'b', 'b']
let carrier = ['a', 'a', 'a', 'a', 'a', 'a']

createBoard = (name) => {
    name.splice(1, 2, destroyer[0], destroyer[1])
    name.splice(25, 3, submarine[0], submarine[1], submarine[2],)
    name.splice(66, 4, cruiser[0], cruiser[1], cruiser[2], cruiser[3])
    name.splice(92, 5, battleship[0], battleship[1], battleship[2], battleship[3], battleship[4])
    name.splice(48, 6, carrier[0], carrier[1], carrier[2], carrier[3], carrier[4], carrier[5])
}



createBoard(board)
