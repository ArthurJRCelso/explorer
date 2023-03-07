

  const patients = [
    {
      name: "Arthur",
      age: 26,
      weight: 89,
      height: 186,
    },
    {
      name: "Camila",
      age: 22,
      weight: 56,
      height: 153,
    },
    {
      name: "Heitor",
      age: 13,
      weight: 61,
      height: 172,
    },
    {
      name: "Elisa",
      age: 55,
      weight: 92,
      height: 169,
    },
  ]


  /*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
  */

/* 
  peso / (altura * altura)
*/

function IMC(height, weight) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function names(patient) {
  return `
  O paciente ${patient.name} possui o IMC de: ${IMC(patient.height, patient.weight)}`
}

for (let patient of patients) {
  let calcImc = names(patient)
  alert(calcImc)
}







