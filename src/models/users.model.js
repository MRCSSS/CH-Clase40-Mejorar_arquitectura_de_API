/* ============================ MODULOS ============================= */
import { Schema, model } from "mongoose";

/* ============================= MODEL ============================== */
const UsersSchema = Schema({
    name:       { type: String, required: true },
    username:   { type: String, required: true },
    address:    { type: String, required: true },
    age:        { type: Number, required: true },
    password:   { type: String, required: true },
    phone:      { type: String, required: true },
    userImg:    { type: String, required: true },
});

const UsersModel = model('users', UsersSchema);

/* ====================== MODULOS EXPORTADOS ======================== */
export default UsersModel;