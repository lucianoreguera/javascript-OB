// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const misDatos = {
    nombre: 'Luciano',
    apellido: 'Reguera',
    edad: 42,
    altura: 186,
    eresDesarrollador: true
}

const edad = misDatos.edad;

const amigos = [
    misDatos,
    {
        nombre: 'Eduardo',
        apellido: 'Equis',
        edad: 40,
        altura: 175,
        eresDesarrollador: false
    },
    {
        nombre: 'Juan',
        apellido: 'Equis',
        edad: 41,
        altura: 180,
        eresDesarrollador: false
    }
]

const mayorAMenorEdad = amigos.sort((a, b) => b.edad - a.edad)

console.log(misDatos)
console.log(edad)
console.log(amigos)
console.log(mayorAMenorEdad)
