const alertError = document.querySelector('.alert-error')
const form = document.querySelector('form')
const inputWrapper = document.querySelector('.input-wrapper')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = calcIMC(weight, height)
  displayResult(result)
}

function calcIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

const modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .tittle span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    modal.wrapper.classList.add('open')
  },
  close() {
    modal.wrapper.classList.remove('open')
  }
}

function displayResult(result) {
  const message = `Seu IMC é de ${result}`
  
  modal.message.innerHTML = message
  modal.open()
}

modal.buttonClose.onclick = () => {
  modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    modal.close()
  }
}





