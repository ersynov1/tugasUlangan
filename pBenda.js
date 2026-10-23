const prompt = require('prompt-sync')({sigint:true})

console.log(`
###################################################
KONVERSI PANJANG BENDA DARI METER KE INCH/KAKI/YARD
###################################################
`)

let input = Number(prompt('Konversi panjang benda (m) : '))

const i = 25.4 / 1000 //mm-m
const k = 30.48 / 100 //cm-m
const y = 0.9144 

let ic=ka=ya=0

ya = parseInt(input/y)
s  = input % y

ka = parseInt(s/k)
s  = s % k

ic = parseInt(s/i)

console.log(`
${ya} yard
${ka} kaki
${ic} inch
`)