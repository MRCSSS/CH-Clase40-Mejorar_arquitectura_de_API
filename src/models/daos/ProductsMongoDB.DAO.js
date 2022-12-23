/* ============================ MODULOS ============================= */
import ContMongoDB from '../containers/ContMongoDB.js';
import ProductsModel from "../products.model.js";

/* =========================== DAO CLASS ============================ */
class ProductsDaoMongoDB extends ContMongoDB {
    constructor() {
        super(ProductsModel);
    }

}

/* ====================== MODULOS EXPORTADOS ======================== */
export default ProductsDaoMongoDB;