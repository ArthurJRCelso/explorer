// ES6 Modules - EcmaScript //
// default import 
import resetControls from "./controls.js"
// named import
import { Timer } from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondDisplay = document.querySelector('.seconds')
let minutes
let timeOut

const configTimer = {
  minutesDisplay,
  secondDisplay,
  timeOut,
}
const timer = Timer(configTimer) 

buttonPlay.addEventListener('click', playPause)
buttonPause.addEventListener('click', pausePlay)
buttonStop.addEventListener('click', stopSet)
buttonSoundOn.addEventListener('click', soundOff)
buttonSoundOff.addEventListener('click', soundOn)
buttonSet.addEventListener('click', addTimer)


function playPause() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  timer.countdown()
  
}

function pausePlay() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timeOut)
}

function stopSet() {
  resetControls()
  updateTimerDisplay(0, 0)
  
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
  minutes = prompt('Quantos minutos?') || 0
  updateTimerDisplay(minutes, 0)
}
