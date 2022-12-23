/* ============================ MODULOS ============================= */
import ContMongoDB from '../containers/ContMongoDB.js';
import CartModel from "../carts.model.js";

/* =========================== DAO CLASS ============================ */
class CartsDaoMongoDB extends ContMongoDB {
    constructor() {
        super(CartModel);
    }

    // async save( cart= { products: [] }) {
    //     return super.save(cart);
    // }
}

/* ====================== MODULOS EXPORTADOS ======================== */
export default CartsDaoMongoDB;