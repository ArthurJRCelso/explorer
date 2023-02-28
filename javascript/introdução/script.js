// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("node.js")
// adicionar no começo
techs.unshift("sql")
// remover do fim
// techs.pop()
// remover do começo
// techs.shift()
// pegar apenas alguns elementos do array7
//console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 1)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(index)