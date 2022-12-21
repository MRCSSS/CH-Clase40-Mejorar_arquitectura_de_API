/* ============================ MODULOS ============================= */
import bcrypt from 'bcrypt';
import { usersDao } from "../models/daos/index.js";

/* =========================== FUNCIONES ============================ */
    /* ---------------- Encripado de Contraseña ---------------- */
async function generateHashPassword(password){
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword;
}
/* =========================== SERVICIOS ============================ */
// export async function getRootServ(req) {
// }

// export async function getCartServ(req) {
// }

export async function getHomeServ(email) {
    const {name, username} = await usersDao.searchUser(email);
    return {name, username};
}

// export async function getLoginServ(req) {
// }

// export async function postLoginServ(req) {
// }

// export async function getLogoutServ(req) {
// }

// export async function getRegisterServ(req) {
// }

export async function postRegisterServ(formData) {
        const {name, username, address, age, password, phone, userImg } = formData;
        const userExists = await usersDao.searchUser(username);

        if (userExists !== null) {
            return 'userExists';
        }
        const newUser = {name, username, address, age, password: await generateHashPassword(password), phone, userImg };
        await usersDao.save(newUser);
        return null;
}
