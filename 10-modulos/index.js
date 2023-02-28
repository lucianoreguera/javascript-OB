import chalk from 'chalk';
import { multiplica, suma } from './controller.js'


const mult = multiplica(1, 2)
const sum = suma(4, 5)

console.log(mult)
console.log(sum)
console.log(chalk.green(sum));
