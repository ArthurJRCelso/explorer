// Switch

/* 

let expression = 'a'

switch (expression) {
  case 'a':
    // código
    console.log('a')
      break
  
  case 'b':
    // código
    console.log('b')
      break

  default:
    // código
    console.log('default')
      break
}

*/

function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    
    case '-':
      result = number1 - number2
      break

    case '*':
      result = number1 * number2
      break

    case '/':
      result = number1 / number2
      break

    default:
      console.log('não implementado')
        break
  }

  return result
}

console.log(calculate(4, '+', 8))