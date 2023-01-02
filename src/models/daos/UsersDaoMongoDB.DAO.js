/* ============================ MODULOS ============================= */
import ContMongoDB from '../containers/ContMongoDB.js';
import UsersModel from "../users.model.js";

/* =========================== DAO CLASS ============================ */
class UsersDaoMongoDB extends ContMongoDB {
    constructor() {
        super(UsersModel);
    }

    // async searchUser(username) {
    //     try {
    //         const object = await this.collection.find({ 'username': username });
    //         return object.length != 0 ? object[0] : null
    //     } catch (error) {
    //         logger.error(`{ error: '${error}' }`);
    //     }
    // }
}

/* ====================== MODULOS EXPORTADOS ======================== */
export default UsersDaoMongoDB;