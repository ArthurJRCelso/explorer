const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKeyDown)

// Função callback
function handleTryClick(event) {
  
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(inputNumber.value < 0 || inputNumber.value > 10 || inputNumber.value == '') {
    return alert('Número inválido!')
  }

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    document.querySelector(".screen2 h2").innerHTML = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++ 
  
  
}

function handleKeyDown(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}


