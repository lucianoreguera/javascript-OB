function factorialWhile(value) {
    let result = 1;
    let index = 2;
    
    if (value < 0) {
        return 0;
    }

    if (value === 0 || value === 1) {
        return 1;
    }

    while (value >= index) {
        result = result * value;
        value--;
    }

    return result;
}

function main() {
    console.log('Ingrese un valor para calcular el factorial [0,...)');
    const n = process.openStdin();

    n.addListener("data", (data) => {
        if (factorialWhile(data.toString()) < 1) {
            return console.log('Ingrese un valor válido')
        }

        console.log(`El factorial de ${data.toString()} es ${factorialWhile(data.toString())}`)
        process.exit();
    })
}

main();