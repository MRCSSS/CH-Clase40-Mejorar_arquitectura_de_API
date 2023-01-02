/* ============================ MODULOS ============================= */
import mongoose from "mongoose";
import { config } from "../config/config.js";
// import { logger } from "../utils/logger.js";
import CustomError from "./CustomError.class.js";
import DBClient from "./DbClient.class.js";

mongoose.set('strictQuery', true);

/* =========================== INSTANCES ============================ */
let instance = null;

/* ===================== MONGO DB CLIENT CLASS ====================== */
class MongoDbClient extends DBClient {
    constructor(){
        super();
        this.connected = false;
        this.client = mongoose;
    }

    async connect(){
        try {
            await this.client.connect(config.mongoDB.url);
            this.connected = true;
            // logger.info('Base de datos conectada');
        } catch (error) {
            const objErr = new CustomError(500, "Error al conectarse a mongodb", error);
            // logger.error(objErr);
            throw objErr;
        }
    }

    async disconnect(){
        try {
            await this.client.connection.close();
            this.connected = false;
            // logger.info('Base de datos desconectada');
        } catch (error) {
            const objErr = new CustomError(500, "Error al desconectarse a mongodb", error);
            // logger.error(objErr);
            throw objErr;
        }
    }

    static getInstance() {
        if (!instance) {
            instance = new MongoDbClient();
        }
        return instance;
    }
}

/* ====================== MODULOS EXPORTADOS ======================== */
export default MongoDbClient;