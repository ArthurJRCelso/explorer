// Estrutura de repetição
// for


// break - continua a execução do loop
for(let i = 0; i < 10; i++) {
  if(i === 50) {
    break;
  }

  console.log(i)
}


// continue - pula a execução do momento
for(let i = 10; i > 0; i--) {
  if(i === 5) {
    continue;
  }

  console.log(i)
}