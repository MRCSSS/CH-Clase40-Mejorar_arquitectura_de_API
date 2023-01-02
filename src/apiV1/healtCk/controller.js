/* =================================== MODULES =================================== */
import * as hChkServ from './service.js';
import * as hChkDTO from './dto.js';
/* ================================== INSTANCES ================================== */

/* ================================== FUNCTIONS ================================== */

/* ================================= CONTROLLERS ================================= */
export async function getHealtCk(req,res) {
    const data = await hChkServ.getRoot(req.body);
    return hChkDTO.data(data);
};
