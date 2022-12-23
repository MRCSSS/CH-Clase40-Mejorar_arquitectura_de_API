/* ============================ MODULOS ============================= */
import { Schema, model } from "mongoose";

/* ============================= MODEL ============================== */
const ProductsSchema = Schema({
    name:           { type: String, required: true },
    description:    { type: String, required: true },
    code:           { type: String, required: true },
    img:            { type: String, required: true },
    price:          { type: Number, required: true },
    stock:          { type: Number, required: true }
});

const ProductsModel = model('products', ProductsSchema);

/* ====================== MODULOS EXPORTADOS ======================== */
export default ProductsModel;