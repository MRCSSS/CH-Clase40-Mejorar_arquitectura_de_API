/* =================================== MODULES =================================== */
import CustomError from "./CustomError.class.js";
/* =========================== DATA BASE CLIENT CLASS  =========================== */
class DBClient {
    async connect(){
        throw new CustomError(501, "DBClient: connect() error", "not implemented!")
    }

    async disconnect(){
        throw new CustomError(501, "DBClient: disconnect() error", "not implemented!")
    }

    static getInstance() {
        throw new CustomError(501, "DBClient: getInstance() error", "not implemented!")
    }
}
/* =============================== EXPORTED MODULES ============================== */
export default DBClient;