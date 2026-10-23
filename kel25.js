const prompt = require ('prompt-sync')({sigint:true})
console.log(`
#########################################################
KONVERSI NILAI UANG KE PECAHAN SENILAI 1000/500/100/50/25
#########################################################
`)

let input = Number(prompt('Nilai uang : '))
console.log('dapat di tukar menjadi :')

const a = 1000
const b = 500
const c = 100
const d = 50
const e = 25

let z=x=v=n=m=s=0

z = parseInt(input/a)
s  = input % a

x = parseInt(s/b)
s  = s % b

v = parseInt(s/c)
s  = s % c

n = parseInt(s/d)
s  = s % d

m = parseInt(s/e)

console.log(`
${z} buah pecahan Rp1000
${x} buah pecahan Rp500
${v} buah pecahan Rp100
${n} buah pecahan Rp50
${m} buah pecahan Rp25
    `)