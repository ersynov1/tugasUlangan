const prompt = require('prompt-sync')({sigint:true})

console.log(`
#############################################
KONVERSI LAMA PROYEK DARI HARI KE TAHUN/BULAN
#############################################
`)

let input = Number(prompt('Masukkan lama proyek (hari) : '))
const tahunKeHari = 365
const bulanKeHari = 30

let t=b=h=s=0

t = parseInt(input/tahunKeHari)
s = input % tahunKeHari

b = parseInt(s/bulanKeHari)
s = s % bulanKeHari

console.log(`
Tahun   : ${t}
Bulan   : ${b}
Hari    : ${s}
    `)