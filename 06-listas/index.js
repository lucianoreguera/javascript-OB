const listaCompra = ['Pan', 'Queso', 'Jamon', 'Pepsi', 'Helado']

listaCompra.push('Aceite de Girasol')
listaCompra.pop()

console.log(listaCompra)

const pelisFavoritas = [
    {
        titulo: 'Gladiador',
        director: 'Ridley Scott',
        fecha: '2000'
    },
    {
        titulo: 'Una mente brillante',
        director: 'Ron Howard',
        fecha: '2002'
    },
    {
        titulo: 'Star Wars',
        director: 'George Lucas',
        fecha: '2015'
    }
]

console.log(pelisFavoritas)

const pelisPosteriores2010 = pelisFavoritas.filter(peli => peli.fecha >= 2010)
console.log(pelisPosteriores2010)

const directoresPeliculas = pelisFavoritas.map(peli => peli.director)
console.log(directoresPeliculas)

const titulosPeliculas = pelisFavoritas.map(peli => peli.titulo)
console.log(titulosPeliculas)

const concatTitulosDirectores = titulosPeliculas.concat(directoresPeliculas)
console.log(concatTitulosDirectores)

const spreadPeliculasDirectores = [...titulosPeliculas, ...directoresPeliculas]
console.log(spreadPeliculasDirectores)