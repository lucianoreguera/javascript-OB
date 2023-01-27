function factorialFor(value) {
    let result = 1;
    
    if (value < 0) {
        return 0;
    }

    if (value === 0 || value === 1) {
        return 1;
    }

    for (let index = value; index > 1; index--) {
        result = result * index;
    }

    return result;
}

function main() {
    console.log('Ingrese un valor para calcular el factorial [0,...)');
    const n = process.openStdin();

    n.addListener("data", (data) => {
        if (factorialFor(data.toString()) < 1) {
            return console.log('Ingrese un valor válido')
        }

        console.log(`El factorial de ${data.toString()} es ${factorialFor(data.toString())}`)
        process.exit();
    })
}

main();
