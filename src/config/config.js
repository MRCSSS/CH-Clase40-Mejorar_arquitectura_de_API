/* ====================== MODULOS IMPORTADOS ======================== */
import * as dotenv from 'dotenv';

/* ================ OBTENIENDO VARIABLES DE ENTORNO ================= */
dotenv.config();

/* ============================ FUNCIONES =========================== */
function resVarEnv(enVar) {
    const regex = /\n\s*/;
    const found = enVar.match(regex)

    if ( found !== null && found.length > 0 ) {
        enVar.replace(regex, '');
        return JSON.parse( enVar )
    } else if ( enVar === '' && enVar === undefined && enVar === null ) {
        return '';
    } else {
        return enVar;
    }
}
/* ============================ VARIABLES =========================== */
const fileSys    = resVarEnv( process.env.FILESYSTEM );
const firebase   = resVarEnv( process.env.FIREBASE   );
const mariaDB    = resVarEnv( process.env.MARIADB    );
const mongoDB    = resVarEnv( process.env.MONGODB    );
const sqlite3    = resVarEnv( process.env.SQLITE3    );

/* =================== OBJETO CONFIGURADOR DE DB ==================== */
export const config = {
    port:           process.env.PORT,
    server: {
        NODE_ENV:        process.env.NODE_ENV,
    },
    dbType:         process.env.DB_TYPE,
    fileSystem:     fileSys,
    fireBase:       firebase,
    mariaDB:        mariaDB,
    mongoDB:        mongoDB,
    sqlite3:        sqlite3,
    mailAdmin:      process.env.MAIL_ADMIN,
    mailAdminPswrd: process.env.MAIL_ADMIN_PSWRD,
    mailSender:     process.env.MAIL_SENDER,
    mailSendPswrd:  process.env.MAIL_SENDER_PSWRD
};
