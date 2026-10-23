const prompt = require('prompt-sync')({sigint:true})

console.log(`
###########################################
KONVERSI SARI CENTIMETER KE KILOMETER/METER
###########################################
`)

let input = Number(prompt('Jarak yang di tempuh (cm) : '))

const k = 100*1000
const m = 100

let mtr=km=s=0

km = parseInt(input/k)
s  = input % k

mtr = parseInt(s/m)
s   = s % m

console.log(`
hasil tempuh dalam format (km/m/cm) :
${km} km
${mtr} m
${s} cm
`)