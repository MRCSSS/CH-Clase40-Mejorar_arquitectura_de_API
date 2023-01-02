/* ============================ MODULOS ============================= */
import CustomError from "./CustomError.class.js";

/* ===================== DATA BASE CLIENT CLASS ===================== */
class DBClient {
    async connect(){
        throw new CustomError(500, "Falta implementar", "method 'connect' en Sub Clase")
    }

    async disconnect(){
        throw new CustomError(500, "Falta implementar", "method 'disconnect' en Sub Clase")
    }

    static getInstance() {
        throw new CustomError(500, "Falta implementar", "method 'getInstance' en Sub Clase")
    }
}

/* ====================== MODULOS EXPORTADOS ======================== */
export default DBClient;