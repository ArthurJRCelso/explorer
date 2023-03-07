const students = [
  {
    name: "Arthur",
    prova1: 4,
    prova2: 5,
  },
  {
    name: "Heitor",
    prova1: 4,
    prova2: 3,
  },
  {
    name: "Camila",
    prova1: 5,
    prova2: 1,
  },
  {
    name: "Elisa",
    prova1: 2,
    prova2: 4,
  },
]

function average(prova1, prova2) {
  return ((prova1 + prova2) / 2)
}

for(let student of students) {
  let result = average(student.prova1, student.prova2)
  if (result >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${result} \n 
Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${result} \n
Não foi dessa vez ${student.name}! Tente novamente!`)
  }
}