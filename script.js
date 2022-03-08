///////// GLOBAL VARIABLES /////////
let board = document.querySelector('.board')
let cell = document.querySelectorAll('.cell')

let cellValue = [
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

createBoard = () => {
    cellValue.splice(1, 2, destroyer[0], destroyer[1])
    cellValue.splice(25, 3, submarine[0], submarine[1], submarine[2],)
    cellValue.splice(66, 4, cruiser[0], cruiser[1], cruiser[2], cruiser[3])
    cellValue.splice(92, 5, battleship[0], battleship[1], battleship[2], battleship[3], battleship[4])
    cellValue.splice(48, 6, carrier[0], carrier[1], carrier[2], carrier[3], carrier[4], carrier[5])
    setValue = () => {
        cell.innerHTML = cellValue
    }
    setValue()

    start = () => {
        for (let i = 0; i < cell.length; i++) {
            cell[i].addEventListener('click', () => {
                if (cell[i].value === 0) {
                    console.log('miss')
                } else {
                    console.log('hit')
                }
            }, {once: true})
        }
    }
}





createBoard()
start()