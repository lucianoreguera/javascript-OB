const nombre = 'Luciano'
const apellido = 'Reguera'
const estudiante = nombre.concat(' ', apellido)
const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus= estudiante.toLowerCase()
const cantidadLetras = estudiante.length
const primerLetraNombre = nombre.charAt(0)
const ultimaLetraApellido = apellido.charAt(apellido.length - 1)
const textoSinEspacios = estudiante.trim()
const existeNombre = estudiante.includes(nombre)

console.log(nombre)
console.log(apellido)
console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(cantidadLetras)
console.log(primerLetraNombre)
console.log(ultimaLetraApellido)
console.log(textoSinEspacios)
console.log(existeNombre)
