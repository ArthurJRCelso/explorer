// for...in

let person = {
  name: 'Arthur',
  age: 26,
  weight: 87.4
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}