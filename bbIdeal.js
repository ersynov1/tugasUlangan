const prompt = require('prompt-sync')({sigint:true})

console.log(`
##############################################
MENENTUKAN BERAT BADAN IDEAL DARI TINGGI BADAN
##############################################
`)

let input = Number(prompt('Masukkan tinggi badan : '))

let a = input - 100
let b = a - (0.1 * a)

console.log(`
Berat badan idealnya adalah ${b}`)