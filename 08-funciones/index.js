// Una función generadora de índices pares automáticos
const sinParametro = () => true
const fnAsync = () => setTimeout(() => console.log("Hola soy una promesa"), 5000)
function* gen() {
    let id = 0
    
    while(true) {
        yield id += 2
    }
}

const genPares = gen()
console.log(sinParametro())
console.log(fnAsync())
console.log(genPares.next())
console.log(genPares.next())
console.log(genPares.next())