///////// GLOBAL VARIABLES /////////
let restart = document.querySelector('.restart')
let board = document.querySelector('.board')
let boxes = document.querySelectorAll('.cell')
let hitCount = document.querySelector('.hitcount')
let missCount = document.querySelector('.misscount')
let shotCount = document.querySelector('.shotcount')
let boxs = document.querySelectorAll('.cell')
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


const init = () => {
    hitCount.innerHTML = '0'
    missCount.innerHTML = '0'
    shotCount.innerHTML = '50'
    dCounter = 0
    sCounter = 0
    cCounter = 0
    bCounter = 0
    aCounter = 0
    document.querySelector('.message').innerHTML = ''
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'white'
        boxes[i].innerHTML = ''
    }
}

const winCondition = () => {
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



const shotIndicator = (e) => {
    if (e.target.dataset.cell === 'd') {
        e.target.innerHTML = 'x'
        e.target.style.backgroundColor = 'red'
        hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
        shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
        dCounter += 1
        console.log('d', dCounter)
        if (dCounter === 2) {
            document.querySelector('.message').innerHTML = 'You sunk the DESTROYER!'
        }
        winCondition()
    } else if (e.target.dataset.cell === 's') {
        e.target.innerHTML = 'x'
        e.target.style.backgroundColor = 'red'
        hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
        shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
        sCounter += 1
        console.log('s', sCounter)
        if (sCounter === 3) {
            document.querySelector('.message').innerHTML = 'You sunk the SUBMARINE!'
        }
        winCondition()
    } else if (e.target.dataset.cell === 'c') {
        e.target.innerHTML = 'x'
        e.target.style.backgroundColor = 'red'
        hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
        shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
        cCounter += 1
        console.log('c', cCounter)
        if (cCounter === 4) {
            document.querySelector('.message').innerHTML = 'You sunk the CRUISER!'
        }
        winCondition()
    } else if (e.target.dataset.cell === 'b') {
        e.target.innerHTML = 'x'
        e.target.style.backgroundColor = 'red'
        hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
        shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
        bCounter += 1
        console.log('b', bCounter)
        if (bCounter === 5) {
            document.querySelector('.message').innerHTML = 'You sunk the BATTLESHIP!'
        }
        winCondition()
    } else if (e.target.dataset.cell === 'a') {
        e.target.innerHTML = 'x'
        e.target.style.backgroundColor = 'red'
        hitCount.innerHTML = parseInt(hitCount.innerHTML) + 1
        shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
        aCounter += 1
        console.log('a', aCounter)
        if (aCounter === 6) {
            document.querySelector('.message').innerHTML = 'You sunk the CARRIER!'
        }
        winCondition()
    } else {
        e.target.style.backgroundColor = 'black'
        missCount.innerHTML = parseInt(missCount.innerHTML) + 1
        shotCount.innerHTML = parseInt(shotCount.innerHTML) - 1
        document.querySelector('.message').innerHTML = ''
        winCondition()
    }
}



restart.addEventListener('click', () => {
    console.log('i called restart')
    startGame()
})




startGame = () => {
    init()
    console.log('d', dCounter)
    console.log('s', sCounter)
    console.log('b', bCounter)
    console.log('a', aCounter)
    console.log('c', cCounter)
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', shotIndicator, {once: true})
    }
}



startGame()



