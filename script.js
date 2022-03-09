///////// GLOBAL VARIABLES /////////
let board = document.querySelector('.board')
let boxes = document.querySelectorAll('.cell')
let hitCount = document.querySelector('.hitcount')
let missCount = document.querySelector('.misscount')
let shotCount = document.querySelector('.shotcount')
let dCounter = 0
let sCounter = 0
let cCounter = 0
let bCounter = 0
let aCounter = 0

let destroyer = 'd'
let submarine = 's'
let cruiser = 'c'
let battleship = 'b'
let carrier = 'a'

init = () => {
    hitCount.innerHTML = '0'
    missCount.innerHTML = '0'
    shotCount.innerHTML = '50'
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'white'
        boxes[i].innerHTML = ''
    }
}

reset = () => {
    hitCount.innerHTML = '0'
    missCount.innerHTML = '0'
    shotCount.innerHTML = '50'
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'white'
        boxes[i].innerHTML = ''
    }
}

winCondition = () => {
    if (hitCount.innerHTML === '20') {
        prompt('You Win! Play again? Y/N')
        if (prompt === 'Y') {
           reset()
        }
    } else if (shotCount.innerHTML === '0') {
        prompt('You Lose! Play again? Y/N')
        if (prompt === 'Y') {
           reset()
        }
    }
} 


startGame = () => {
    init()
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', () => {
            if (boxes[i].dataset.cell === 'hit') {
                boxes[i].innerHTML = 'x'
                boxes[i].style.backgroundColor = 'red'
                hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
                shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
                winCondition()
            } else {
                boxes[i].style.backgroundColor = 'black'
                missCount.innerHTML = parseInt(missCount.innerHTML) + 1
                shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
                winCondition()
            }
        }, {once: true})
    }
}

startGame()




















// let cellValue = [
//     0,0,0,0,0,0,0,0,0,0,0,
//     0,0,0,0,0,0,0,0,0,0,0,
//     0,0,0,0,0,0,0,0,0,0,0,
//     0,0,0,0,0,0,0,0,0,0,0,
//     0,0,0,0,0,0,0,0,0,0,0,
//     0,0,0,0,0,0,0,0,0,0,0,
//     0,0,0,0,0,0,0,0,0,0,0,
//     0,0,0,0,0,0,0,0,0,0,0,
//     0,0,0,0,0,0,0,0,0,0,0,
//     0,0,0,0,0,0,0,0,0,0,0,
//     0,0,0,0,0,0,0,0,0,0,0,
// ]



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