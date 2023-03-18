// DOM

let play = document.querySelector('.play')
let pause = document.querySelector('.pause')

play.addEventListener('click', playPause)
pause.addEventListener('click', pausePlay)

function playPause() {
  play.classList.add('hide')
  pause.classList.remove('hide')
}

function pausePlay() {
  pause.classList.add('hide')
  play.classList.remove('hide')
}

