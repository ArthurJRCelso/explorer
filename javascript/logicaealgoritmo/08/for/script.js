/*
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    * Nome
    * Idade
    * Peso
    * Altura
    
  Escreva uma lista contendo o nome dos pacientes
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

let patientsNames = []

for(let index = 0; index < patients.length; index++) {
  patientsNames[index] = patients[index].name
}

alert(patientsNames)
  
