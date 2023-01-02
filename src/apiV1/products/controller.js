/* =================================== MODULES =================================== */
import * as service from "./service.js";
import * as dto from "./dto.js";
/* ================================== INSTANCES ================================== */

/* ================================== FUNCTIONS ================================== */

/* ================================= CONTROLLERS ================================= */
export async function getAllProducts(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function deleteAllProducts(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function getProduct(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function postProduct(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function updateProduct(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function deleteProduct(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};
