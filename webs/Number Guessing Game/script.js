/*
let randomNumber = Math.floor(Math.random()*100) + 1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')

let guessCount = 1
let resetButton
guessField.focus()

function checkGuess() {
    const userGuess = Number(guessField.value);
        if (guessCount === 1) {
            guesses.textContent = "Previuos Guesses: ";
        }
        guesses.textContent += userGuess

        if (userGuess === randomNumber) {
            lastResult.textContent = 'Congratulations! You got it right!'
            lastResult.style.backgroundColor = 'green'
            lowOrHi.textContent = ""
            setGameOver()
        } else if (guessCount === 10) {
            lastResult.textContent = '!!!GAME OVER!!'
            lowOrHi.textContent = ''
            setGameOver()
        } else {
            lastResult.textContent = "Wrong!"
            lastResult.style.backgroundColor = 'red'
            if (userGuess < randomNumber) {
                lowOrHi.textContent = 'Last guess was too low!'
            } else if  ( userGuess > randomNumber) {
                lowOrHi.textContent = 'Last guess was too high!'
            }
        }
        guessCount++
        guessField.value = ''
        guessField.focus()
}

guessSubmit.addEventListener('click', checkGuess)

function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement('button')
    resetButton.textContent = 'Start new game'
    document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    guessCount = 1

    const resetParas = 
    document.querySelectorAll('.resultParas p')
        for (const resetPara of resetParas) {
            resetPara.textContent = ''
        }

        resetButton.parentNode.removeChild(resetButton)

        guessField.disabled = false
        guessSubmit.disabled = false
        guessField.value = ''
        guessField.focus()

        lastResult.style.backgroundColor = 'white'
        
        randomNumber = Math.floor(Math.random()*100) + 1
}
*/

let randomNumber = Math.floor(Math.random()*100) + 1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')

let guessCount = 1
let resetButton
guessField.focus()

 const audio = new Audio('/sounds/enter-button-sound.mp3')

function checkGuess() {
    const userGuess = Number(guessField.value)
        if (guessCount === 1) {
            guesses.textContent = 'Respuestas anteriores: '
        }
        guesses.textContent += userGuess + '\xa0' + '\xa0'
        
        if (userGuess === randomNumber) {
            lastResult.textContent = 'Felicitaciones! Lo hiciste bien!'
            lastResult.style.color = 'green'
            lowOrHi.textContent = ""
            setGameOver()
        } else if (guessCount === 10) {
            lastResult.textContent = '!!! FIN DEL JUEGO !!!'
            lowOrHi.textContent = ''
            setGameOver()
        } else {
            lastResult.textContent = 'Incorrecto!'
            lastResult.style.color = 'red'
            if (userGuess < randomNumber) {
                lowOrHi.textContent = 'La última respuesta fue muy baja!'
            } else if (userGuess > randomNumber) {
                lowOrHi.textContent = 'La última respuesta fue muy alta!'
            }
        }
        guessCount++
        guessField.value = ''
        guessField.focus()
}

guessSubmit.addEventListener('click', checkGuess)
guessSubmit.addEventListener('click', () => {
    audio.play()
})

function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement('button')
    resetButton.className = 'reset-button'
    resetButton.textContent = 'Start again'
    document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    guessCount = 1

    const resetParas =
    document.querySelectorAll('.resultParas p')
        for (const resetPara of resetParas) {
            resetPara.textContent = ''
        }

        resetButton.parentNode.removeChild(resetButton)

        guessField.disabled = false
        guessSubmit.disabled = false
        guessField.value = ''
        guessField.focus()

        lastResult.style.backgroundColor = 'white'

        randomNumber = Math.floor(Math.random()*100) + 1
}