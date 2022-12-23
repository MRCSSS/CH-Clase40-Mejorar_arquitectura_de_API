/* ============================ MODULOS ============================= */
import { Schema, model } from "mongoose";

/* ============================= MODEL ============================== */
const MessagesSchema = Schema({
    author:     { type: [],     required: true },
    timestamp:  { type: String, required: true },
    message:    { type: String, required: true }
});

const MessagesModel = model('msgs', MessagesSchema);

/* ====================== MODULOS EXPORTADOS ======================== */
export default MessagesModel;