'use strict'

var gGameLogos = [
    { id: 1, src: 'assets/img/1.png', name: 'Pac-Man', altName: 'Pac-Woman' },
    { id: 2, src: 'assets/img/2.png', name: 'Tetris', altName: 'Crazy-Mania' },
    { id: 3, src: 'assets/img/3.png', name: 'Minecraft', altName: 'Blockcraft' },
    { id: 4, src: 'assets/img/4.png', name: 'Candy Crush', altName: 'Candy Rush' },
    { id: 5, src: 'assets/img/5.png', name: 'Clash of Clans', altName: 'Worriors' },
    { id: 6, src: 'assets/img/6.png', name: 'Doom', altName: 'Dodge' },
    { id: 7, src: 'assets/img/7.png', name: 'Mortal Combat', altName: 'Takken' },
    { id: 8, src: 'assets/img/8.png', name: 'Half-life', altName: 'Lambda' },
    { id: 9, src: 'assets/img/9.png', name: 'Mario', altName: 'Mashroom King' },
    { id: 10, src: 'assets/img/10.png', name: 'Over Watch', altName: 'Evolve' },
    { id: 11, src: 'assets/img/11.png', name: 'Rocket League', altName: 'Racer League' },
    { id: 12, src: 'assets/img/12.png', name: 'Gears of War', altName: 'Left 4 Dead' }
]

var gButtons = [
    { id: 1, text: 'Test1', altText: 'altTest1' },
    { id: 2, text: 'Test2', altText: 'altTest2' }
]

var correctCount

var currRound

var elBackgroundImg = document.querySelector('.background-image')

function init() {
    elBackgroundImg.src = 'assets/start.webp'
    console.log('Welcome to Game logo quiz!');
}

function startGame(elStartButton) {
    correctCount = 0
    currRound = 0
    elBackgroundImg.src = 'assets/wondering2.webp'
    elStartButton.style.display = 'none'
    nextImg()
}

function nextImg() {
    let elQuizImg = document.querySelector('.quiz-image')
    var nextImage = `<img src="assets/img/${gGameLogos[currRound].id}.png">`
    elQuizImg.innerHTML = nextImage

    var elButtons = document.querySelector('.buttons')
    elButtons.innerHTML = ''
    let currNames = randomName()
    for (let i = 0; i < currNames.length; i++) {
        let button = `<button class="button${i + 1}" onclick="checkAnswer(this)">${currNames[i]}</button>`
        elButtons.innerHTML += button
    }
}

function checkAnswer(elButton) {
    if (elButton.innerText === gGameLogos[currRound].name) {
        console.log('true:', true);
        correctCount++
    }
    currRound++
    if (currRound !== gGameLogos.length) nextImg()
    else {
        elBackgroundImg.src = 'assets/wondering.webp'
        alert(`You've got ${correctCount} of ${currRound} correct!`)
        restartGame()
    }
}

function restartGame() {
    let elStartButton = document.querySelector('.start-button')
    elStartButton.innerText = 'Restart'
    elStartButton.style.display = 'block'
    let elQuizImg = document.querySelector('.quiz-image')
    elQuizImg.innerHTML = `<p>Welcome to my game, it's time to check if you are really a gamer or not!, when you feel ready just press 'Start Game'.</p>`
    elBackgroundImg.src = 'assets/start.webp'
}

function randomName() {
    let currNames = []
    if (Math.random() >= 0.5) {
        currNames.push(gGameLogos[currRound].name)
        currNames.push(gGameLogos[currRound].altName)
    } else {
        currNames.push(gGameLogos[currRound].altName)
        currNames.push(gGameLogos[currRound].name)
    }
    return currNames
}