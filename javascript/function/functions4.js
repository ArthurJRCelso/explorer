// function scope
let subject = 'Create Vídeo'

function createThink(subject) {
  subject = 'Study'
  return subject
}

console.log(subject)
console.log(createThink(subject))