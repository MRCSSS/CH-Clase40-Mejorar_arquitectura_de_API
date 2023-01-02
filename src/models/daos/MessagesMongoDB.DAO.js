/* ============================ MODULOS ============================= */
import ContMongoDB from '../containers/ContMongoDB.js';
import MessagesModel from "../messages.model.js";

/* =========================== DAO CLASS ============================ */
class MessagesDaoMongoDB extends ContMongoDB {
    constructor() {
        super(MessagesModel);
    }
}

/* ====================== MODULOS EXPORTADOS ======================== */
export default MessagesDaoMongoDB;