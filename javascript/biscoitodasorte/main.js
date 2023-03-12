const cookie = document.querySelector('#cookie')
const screen1 = document.querySelector('#main1')
const screen2 = document.querySelector('#main2')
const button = document.querySelector('button')
let phraseMot = document.querySelector('#phraseMot')
let randomNumber = Math.round(Math.random() * 10)

cookie.addEventListener('click', cookie1)
button.addEventListener('click', resetClick)

function cookie1(e) {
  toggleScreen()
  switch(randomNumber) {
    case 1: 
      phraseMot.innerHTML = "Comece onde você está. Use o que você tem. Faça o que você pode."
        break;
    
    case 2: 
      phraseMot.innerHTML = "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe."
        break;

    case 3: 
      phraseMot.innerHTML = "Não importa o que você decidiu. O que importa é que isso te faça feliz."
        break;

    case 4:
      phraseMot.innerHTML = "O sucesso é a soma de pequenos esforços repetidos dia após dia."
        break;

    case 5:
      phraseMot.innerHTML = "Sonhos são portas, atitude é a chave."
        break;

    case 6:
      phraseMot.innerHTML = "A persistência é o caminho do êxito."
        break;

    case 7:
      phraseMot.innerHTML = "Aprenda a focar na solução e não no problema."
        break;

    case 8:
      phraseMot.innerHTML = "Sempre parece impossível até que seja feito."
        break;

    case 9:
      phraseMot.innerHTML = "Apaixone-se pelo processo de se tornar sua melhor versão."
        break;

    case 10:
      phraseMot.innerHTML = "Não importa o quanto você é bom, você sempre será criticado."
        break;
  }
}

function resetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}