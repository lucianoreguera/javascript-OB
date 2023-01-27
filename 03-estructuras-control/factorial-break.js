let result = 1;
let value = 10;

while (true) {
    result *= value;
    value--;
    if (value === 1) break
}

console.log(`El factorial de 10 es ${result}`);