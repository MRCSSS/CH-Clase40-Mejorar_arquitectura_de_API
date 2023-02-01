/* =================================== MODULES =================================== */
import winston from 'winston';
import config from '../config/config.js';
/* ========================= LOGGER CONFIGURATOR OBJECT  ========================= */
let logger = null;

const format = winston.format.combine(
    winston.format.simple(),
    winston.format.timestamp(),
    winston.format.printf(info => `[${info.timestamp}][test:${info.level}] ${info.message}`)
);

if (config.server.NODE_ENV === 'development') {
    logger = winston.createLogger({ 
        format: winston.format.combine(
            winston.format.simple(),
            winston.format.timestamp(),
            winston.format.printf(info => `[${info.timestamp}][dev:${info.level}] ${info.message}`)
        ),
        transports: [
            new winston.transports.Console({
                level: 'debug',
            }),
            new winston.transports.File({
                maxsize: 5120000,
                maxFiles: 5,
                filename: 'logs/dev.log',
                level: 'verbose'
            })
        ]
    });
} else {
    logger = winston.createLogger({ 
        format: winston.format.combine(
            winston.format.simple(),
            winston.format.timestamp(),
            winston.format.printf(info => `[${info.timestamp}][prod:${info.level}] ${info.message}`)
        ),
        transports: [
            new winston.transports.File({
                maxsize: 5120000,
                maxFiles: 5,
                filename: 'logs/prod.log',
                level: 'http'
            }),
            new winston.transports.File({
                maxsize: 5120000,
                maxFiles: 5,
                filename: 'logs/error.log',
                level: 'warn'
            }),
        ]
    });
}
/* =============================== EXPORTED MODULES ============================== */
export default logger;