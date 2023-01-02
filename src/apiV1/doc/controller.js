/* =================================== MODULES =================================== */
import * as docServ from "./service.js";
import * as docDTO from "./dto.js";
/* ================================== INSTANCES ================================== */

/* ================================== FUNCTIONS ================================== */

/* ================================= CONTROLLERS ================================= */
export async function getDoc(req,res) {
    const data = await docServ.getRoot(req.body);
    return docDTO.data(data);
};
