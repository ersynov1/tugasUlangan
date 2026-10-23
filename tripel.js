const prompt = require('prompt-sync')({sigint:true})

console.log(`
#######################
PERTUKARAN NILAI TRIPEL
#######################
`)

let x = Number(prompt('Masukkan nilai x : '))
let y = Number(prompt('Masukkan nilai y : '))
let z = Number(prompt('Masukkan nilai z : '))

console.log(`
Pertukarannya jadi :
${x}:${y}:${z}
${y}:${z}:${x}
`)