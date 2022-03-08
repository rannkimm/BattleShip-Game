///////// GLOBAL VARIABLES /////////
let board = document.querySelector('.board')
let box = document.querySelectorAll('.cell')

console.log(box)
console.log(box.dataset.cell)
// console.log(box.dataset.cell)


// start = () => {
//     for (let i = 0; i < box.length; i++) {
//         box[i].addEventListener('click', () => {
//             // if (cell.dataset.square === sq1) {
//             //     console.log('miss')
//             // } else {
//             //     console.log('hit')
//             // }
//         }, {once: true})
//     }
// }




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

let destroyer = 'hit'
let submarine = 'hit'
let cruiser = 'hit'
let battleship = 'hit'
let carrier = 'hit'

// createBoard = () => {
    
    // cellValue.splice(1, 2, destroyer, destroyer)
    // cellValue.splice(25, 3, submarine, submarine, submarine,)
    // cellValue.splice(66, 4, cruiser, cruiser, cruiser, cruiser)
    // cellValue.splice(92, 5, battleship, battleship, battleship, battleship, battleship)
    // cellValue.splice(48, 6, carrier, carrier, carrier, carrier, carrier, carrier)
    // setValue = () => {
    //     cell.innerHTML = cellValue
    // }
    // setValue()

// }



// start = () => {
//     for (let i = 0; i < cell.length; i++) {
//         cell[i].addEventListener('click', () => {
//             // if (cell[i].innerHTML === 0) {
//             //     console.log('miss')
//             // } else {
//             //     console.log('hit')
//             // }
//         }, {once: true})
//     }
// }

    

// createBoard()

// console.log(cell.innerHTML)
// start()