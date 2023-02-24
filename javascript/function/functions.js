/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}

const arthur = new Person("Arthur")
const camila = new Person ("Camila")
console.log(arthur.walk())
console.log(camila.walk())