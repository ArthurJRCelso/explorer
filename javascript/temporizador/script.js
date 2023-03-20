// DOM

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondDisplay = document.querySelector('.seconds')
let minutes

buttonPlay.addEventListener('click', playPause)
buttonPause.addEventListener('click', pausePlay)
buttonStop.addEventListener('click', stopSet)
buttonSoundOn.addEventListener('click', soundOff)
buttonSoundOff.addEventListener('click', soundOn)
buttonSet.addEventListener('click', addTimer)

function resetControls() {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown() {
  setTimeout(function() {
    let seconds = Number(secondDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    secondDisplay.textContent = String(seconds - 1).padStart(2, "0")
    if (minutes <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondDisplay.textContent = String(seconds - 1).padStart(2, "0") 

    
    countDown()

  }, 1000)
}


function playPause() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  countDown()
  
}

function pausePlay() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function stopSet() {
  resetControls()
}

function soundOff() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
}

function soundOn() {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
}

function addTimer() {
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = String(minutes).padStart(2, "0")

}
