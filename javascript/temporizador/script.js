// DOM

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

buttonPlay.addEventListener('click', playPause)
buttonPause.addEventListener('click', pausePlay)
buttonStop.addEventListener('click', stopSet)
buttonSoundOn.addEventListener('click', soundOff)
buttonSoundOff.addEventListener('click', soundOn)

function playPause() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
}

function pausePlay() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function stopSet() {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function soundOff() {
  buttonSoundOn.classList.add('.hide')
  buttonSoundOff.classList.remove('hide')
}

function soundOn() {
  
}
