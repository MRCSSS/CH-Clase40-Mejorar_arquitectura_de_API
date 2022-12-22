/* ---------------------------- MODULOS -----------------------------*/
import winston from 'winston';
import { config } from './config.js';
import path from 'path';

/* ------------------- OBJETO CONFIGURADOR DE LOGGER -------------------- */
const loggerConfig = winston.createLogger({
    transports: [
        new winston.transports.Console({level: 'info'}),
        new winston.transports.File({ filename: 'logs/warn.log' ,level: 'warn'}),
        new winston.transports.File({ filename: 'logs/error.log' ,level: 'error'}),
    ]
});

let logger = null

// if (config.server.NODE_ENV === 'production') {
//   logger = log4js.getLogger('prod');
// } else {
//   logger = log4js.getLogger();
// }

logger = loggerConfig

export default logger;