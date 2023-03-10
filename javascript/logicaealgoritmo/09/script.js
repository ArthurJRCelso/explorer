/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
  */

/* 
  peso / (altura * altura)
*/

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

  function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }

  function printPatientIMC(patient) {
      return `
      Paciente ${patient.name} possui o IMC de
      ${IMC(patient.weight, patient.height)}
      `
  }

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}







