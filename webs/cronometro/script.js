let minutes = 0
let seconds = 0
let mili = 0
let appendMili = document.querySelector('#mili')
let appendSeconds = document.querySelector('#seconds')
let appendMinutes = document.querySelector('#minutes')
let buttonStart = document.querySelector('#button-start')
let buttonStop = document.querySelector('#button-stop')
let buttonReset = document.querySelector('#button-reset')
let Interval

buttonStart.addEventListener('click', function(){
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
})

buttonStop.addEventListener('click', function(){
    clearInterval(Interval)
})

buttonReset.addEventListener('click', function(){
    clearInterval(Interval)
    mili = "00"
    seconds = "00"
    minutes = "00"
    appendMili.innerHTML = mili
    appendSeconds.innerHTML = seconds
    appendMinutes.innerHTML = minutes

})

function startTimer(){
    mili++
    if (mili <= 9) {
        appendMili.innerHTML = "0" + mili
    }
    if  (mili > 9) {
        appendMili.innerHTML = mili
    }
    if (mili > 99) {
        console.log("seconds")
        seconds++
        appendSeconds.innerHTML = "0" + seconds
        mili = 0
        appendMili.innerHTML = "0" + 0
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds
    }
    if (seconds > 59) {
        console.log("minutes")
        minutes++
        appendMinutes.innerHTML = "0" + minutes
        seconds = 0
        appendSeconds.innerHTML = "0" + 0
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes
    }
}