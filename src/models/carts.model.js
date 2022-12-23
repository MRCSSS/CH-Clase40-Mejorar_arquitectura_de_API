/* ============================ MODULOS ============================= */
import { Schema, model } from "mongoose";

/* ============================= MODEL ============================== */
const CartSchema = Schema({
    timestamp:  { type: String, required: true },
    productos:  { type: [],     required: true },
    id:         { type: String, required: true }
});

const CartModel = model('carts', CartSchema);

/* ====================== MODULOS EXPORTADOS ======================== */
export default CartModel;