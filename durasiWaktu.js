const prompt = require('prompt-sync')({sigint:true})

console.log(`
#####################################
KONVERSI SARI DETIK KE HARI/JAM/MENIT
#####################################
    `)
    
let input = Number(prompt('Masukkan waktu (s) : '))

const hariKeDetik     = 60*60*24
const jamKeDetik      = 60*60
const menitKeDetik    = 60

let h = j = m = s = 0

h    = parseInt(input / hariKeDetik)
s    = input % hariKeDetik 

j     = parseInt(s / jamKeDetik)
s     = s % jamKeDetik

m     = parseInt(s / menitKeDetik)
s     = s % menitKeDetik

console.log(`
Hari    : ${h}
Jam     : ${j}
Menit   : ${m}
Detik   : ${s}
`)