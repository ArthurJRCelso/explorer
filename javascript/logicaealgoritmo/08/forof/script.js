/*
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    * Nome
    * Idade
    * Peso
    * Altura
    
  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos
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
let patientsAge = []
let patientsWeigth = []
let patientsHeigth = []

for(let patient of patients) {
  patientsNames.push(patient.name)
  patientsAge.push(patient.age)
  patientsWeigth.push(patient.weigth)
  patientsHeigth.push(patient.heigth)
}

for (let names = 0; names < 4; names++) {
  alert(`${patientsNames[names]}, tem ${patientsAge[names]}, pesa ${patientsWeigth[names]} e tem a altura de ${patientsHeigth[names]}`)
}
  
