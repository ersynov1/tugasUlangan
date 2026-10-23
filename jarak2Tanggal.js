const prompt = require('prompt-sync')({sigont:true})

console.log(`
############################
MENGHITUNG JARAK DUA TANGGAL
############################
`)

let h1 = Number(prompt('Masukkan tanggal kesatu : '))
let b1 = Number(prompt('Masukkan bulan kesatu   : '))
let t1 = Number(prompt('Masukkan tahun kesatu   : '))
console.log('================================================')
let h2 = Number(prompt('Masukkan tanggal kedua  : '))
let b2 = Number(prompt('Masukkan Bulan kedua    : '))
let t2 = Number(prompt('Masukkan tahun kedua    : '))
console.log('================================================')
console.log(`Keterangan tanggal pertama : ${h1}:${b1}:${t1}`)
console.log(`Keterangan tanggal kedua   : ${h2}:${b2}:${t2}`)

const th1 = (t1*365) + (b1*30) + h1
const th2 = (t2*365) + (b2*30) + h2

const sel = Math.abs(th1-th2)

let s=bu=ta=0

ta = parseInt(sel/365)
s  = sel % 360

bu = parseInt(s/30)
s  = s % 30

console.log(`
Selisih Dua tanggal di atas adalah :
${s}:${bu}:${ta}`)