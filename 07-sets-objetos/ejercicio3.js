const hoy = Date.now()
const miCumple = new Date('11/24/1980')
const diffFechas = hoy > miCumple
const diaNacimiento = miCumple.getDay()
const mesNacimiento = miCumple.getMonth()
const anioNacimiento = miCumple.getFullYear()


console.log(hoy)
console.log(miCumple)
console.log(diffFechas)
console.log(diaNacimiento)
console.log(mesNacimiento)
console.log(anioNacimiento)
