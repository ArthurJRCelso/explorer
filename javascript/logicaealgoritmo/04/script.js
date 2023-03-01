/*
  Solicitar o nome do aluno e as três notas
  do bimestre e calcular a média daquele aluno.

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar o seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com 
  o nome do aluno e a nota
*/

let name = prompt('Qual o seu nome?')
alert('Nas próximas etapas, por favor digite suas notas.')
let noteOne = prompt('Qual a sua nota em matemática?')
let noteTwo = prompt('Qual a sua nota em História?')
let noteThree = prompt('Quala a sua nota em física?')

noteOne = Number(noteOne)
noteTwo = Number(noteTwo)
noteThree = Number(noteThree)

let result = (noteOne + noteTwo + noteThree) / 3

if (result >= 15) {
  alert('Parabéns ' + name + '! Sua média foi ' + result)
} else {
  alert('Recuperação! Sua média foi ' + result)
}
