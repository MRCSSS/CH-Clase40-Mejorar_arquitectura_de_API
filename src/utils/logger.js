/* ---------------------------- MODULOS -----------------------------*/
import winston from 'winston';
import { config } from '../config/config.js';
import path, { format } from 'path';

/* ------------------- OBJETO CONFIGURADOR DE LOGGER -------------------- */
const testConfig = winston.createLogger({
    format: winston.format.combine(
        winston.format.simple(),
        winston.format.timestamp(),
        winston.format.printf(info => `[${info.timestamp}][test:${info.level}] ${info.message}`)
    ),
    transports: [
        new winston.transports.Console({
            level: 'info',
        }),
        new winston.transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: 'logs/warn.log',
            level: 'warn'
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error'
        }),
    ]
});

let logger = null;

if (config.server.NODE_ENV === 'production') {
  logger = testConfig;
} else {
  logger = testConfig;
}

export default logger;