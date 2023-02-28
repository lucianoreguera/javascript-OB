const winston = require('winston')


const division = (numerador, divisor) => {
    if (divisor === 0) {
        throw new Error('No se puede dividir entre 0')
    }

    return numerador / divisor
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
});

const numerador = 10
const divisor = 0

try {
    const resultado = division(numerador, divisor)
    logger.info(`${numerador} / ${divisor} = ${resultado}`)
} catch (error) {
    logger.error(`${error}`)
}