/* =================================== MODULES =================================== */
import * as userService from './service.js';
import * as userDTO from "./dto.js";
import logger from '../../utils/logger.js';
/* ================================== INSTANCES ================================== */

/* ================================== FUNCTIONS ================================== */

/* ================================= MIDDLEWARES ================================= */


/* ================================= CONTROLLERS ================================= */
export async function register(req,res) {
    const data = await service.getRoot(req.body);
    try {
        await userService.createCart();
        logger.info(`status: 200, route: '${req.method} ${req.baseUrl} ${req.url}'`);
        return res.status(201);
    } catch (error) {
        logger.error(`status: 500, route: '${req.method} ${req.baseUrl} ${req.url}', error: '${error}' }`);
        return res.status(500);
    }
};

export async function login(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function updateUser(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function deleteUser(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function getAllUsers(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function deleteAllUsers(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};
