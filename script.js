///////// GLOBAL VARIABLES /////////
let restart = document.querySelector('.restart')
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

// let destroyer = document.querySelector('.message').innerHTML = 'You sunk the DESTROYER!'
// let submarine = document.querySelector('.message').innerHTML = 'You sunk the SUBMARINE!'
// let cruiser = document.querySelector('.message').innerHTML = 'You sunk the CRUISER!'
// let battleship = document.querySelector('.message').innerHTML = 'You sunk the BATTLESHIP!'
// let carrier = document.querySelector('.message').innerHTML = 'You sunk the CARRIER!'
// let notAHit = document.querySelector('.message').innerHTML = 'You MISSED! Try Again!'


init = () => {
    hitCount.innerHTML = '0'
    missCount.innerHTML = '0'
    shotCount.innerHTML = '50'
    document.querySelector('.message').innerHTML = ''
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'white'
        boxes[i].innerHTML = ''
    }
}

winCondition = () => {
    if (hitCount.innerHTML === '20') {
        let winPrompt = prompt('You Win! Play again? Y/N')
        if (winPrompt === 'Y') {
           startGame()
        }
    } else if (shotCount.innerHTML === '0') {
        let losePrompt = prompt('You Lose! Play again? Y/N')
        if (losePrompt === 'Y') {
           startGame()
        }
    }
} 


startGame = () => {
    init()
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click',  () => {
            if (boxes[i].dataset.cell === 'd') {
                boxes[i].innerHTML = 'x'
                boxes[i].style.backgroundColor = 'red'
                hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
                shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
                dCounter += 1
                if (dCounter === 2) {
                    document.querySelector('.message').innerHTML = 'You sunk the DESTROYER!'
                }
                winCondition()
            } else if (boxes[i].dataset.cell === 's') {
                boxes[i].innerHTML = 'x'
                boxes[i].style.backgroundColor = 'red'
                hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
                shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
                sCounter += 1
                if (sCounter === 3) {
                    document.querySelector('.message').innerHTML = 'You sunk the SUBMARINE!'
                }
                winCondition()
            } else if (boxes[i].dataset.cell === 'c') {
                boxes[i].innerHTML = 'x'
                boxes[i].style.backgroundColor = 'red'
                hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
                shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
                cCounter += 1
                if (cCounter === 4) {
                    document.querySelector('.message').innerHTML = 'You sunk the CRUISER!'
                }
                winCondition()
            } else if (boxes[i].dataset.cell === 'b') {
                boxes[i].innerHTML = 'x'
                boxes[i].style.backgroundColor = 'red'
                hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
                shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
                bCounter += 1
                if (bCounter === 5) {
                    document.querySelector('.message').innerHTML = 'You sunk the BATTLESHIP!'
                }
                winCondition()
            } else if (boxes[i].dataset.cell === 'a') {
                boxes[i].innerHTML = 'x'
                boxes[i].style.backgroundColor = 'red'
                hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
                shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
                aCounter += 1
                if (aCounter === 6) {
                    document.querySelector('.message').innerHTML = 'You sunk the CARRIER!'
                }
                winCondition()
            } else {
                boxes[i].style.backgroundColor = 'black'
                missCount.innerHTML = parseInt(missCount.innerHTML) + 1
                shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
                document.querySelector('.message').innerHTML = ''
                winCondition()
            }
        }, {once: true})
        // if (boxes[i].innerHTML === '') {
        //     boxes[i].addEventListener('mouseenter', ()=> {
        //         boxes[i].innerHTML = 'x'
        //     })
        //     boxes[i].addEventListener('mouseleave', ()=> {
        //         boxes[i].innerHTML = ''
        //     })
        // }
    }
    restart.addEventListener('click', () => {
        startGame()
    })
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