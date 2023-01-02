/* =================================== MODULES =================================== */
// import * as service from "./service.js";
// import * as dto from "./dto.js";
/* ================================== INSTANCES ================================== */

/* ================================== FUNCTIONS ================================== */

/* ================================= CONTROLLERS ================================= */
export async function data(req,res) {
    const dataDto = await service.getRoot(req.body);
    return dataDto;
};
