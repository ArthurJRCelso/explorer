
const number1 = Number(prompt("Digite o primeiro número: "))

const number2 = Number(prompt("Digite o segundo número: "))

let sum = number1 + number2
let subtraction = number1 - number2
let multiplication = number1 * number2
let division = number1 / number2
let restDivision = number1 % number2

alert(`Soma: ${sum}  `)
alert(`Subtração ${subtraction}`)
alert(`Multiplicação ${multiplication}`)
alert(`Divisão: ${division}`)
alert(`Resto da divisão: ${restDivision}`)

if (sum % 2 == 0) {
  alert("A soma dos dois números é par")
} else {
  alert("A soma dos dois números é ímpar")
}

if (number1 == number2) {
  alert("Os dois números são iguais")
} else {
  alert("Os dois números são diferentes")
}