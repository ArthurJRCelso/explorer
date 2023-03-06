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
      weigth: 89,
      heigth: 186,
    },
    {
      name: "Camila",
      age: 22,
      weigth: 56,
      heigth: 153,
    },
    {
      name: "Heitor",
      age: 13,
      weigth: 61,
      heigth: 172,
    },
    {
      name: "Elisa",
      age: 55,
      weigth: 92,
      heigth: 169,
    },
  ]

  alert(`Paciente ${patients[0].name} possui o IMC de
  ${(patients[0].weigth / ((patients[0].heigth / 100) ** 2)).toFixed(2)}`)

