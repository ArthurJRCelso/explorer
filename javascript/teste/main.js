// variáveis - variables //
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const wrapper = document.querySelector('.modal-wrapper')
let message = document.querySelector('.modal .tittle span')
const buttonClose = document.querySelector('.modal button.close')


form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  message.innerHTML = message
  
  open()
}

buttonClose.onclick = () => {
  close()
}
function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function open() {
  wrapper.classList.add('open')
}

function close() {
  wrapper.classList.remove('open')
}

  