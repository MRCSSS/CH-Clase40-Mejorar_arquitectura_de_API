/* ============================ MODULOS ============================= */
import bcrypt from 'bcrypt';
// import { usersDao } from "../models/daos/index.js";
import { unlink } from 'node:fs';
// import { createTransport } from 'nodemailer';
import ProductoDAOMongoDB from "../models2/daos/Productos.dao.js.js";

/* ====================== INSTANCIA DE ROUTER ======================= */
const DAO = new ProductoDAOMongoDB();
// const transporter = createTransport({
//     host: 'smtp.hostinger.com',
//     port: 465,
//     auth: {
//         user: config.mailSender,
//         pass: config.mailSendPswrd
//     }
// });

// const client = twilio(config.accountSid, config.authToken);

/* =========================== FUNCIONES ============================ */

/* =========================== SERVICIOS ============================ */
export async function getHomeServ(email) {
    const {name, username} = await DAO.searchUser(email);
    return {name, username};
}

export async function postRegisterServ(formData, fileData) {
    const userExists = await DAO.searchUser(formData.username);

    if (userExists !== null) {
        unlink(`${fileData.path}`);
        return 'userExists';
    }

    const {name, username, age, password, phone, address} = formData;
    const imgName = fileData.filename;
    const newUser = {
        name,
        password: await bcrypt.hash(password, 10),
        username,
        age,
        address,
        phone,
        userImg: imgName
    };
    await DAO.save(newUser);

    return null;
}

// export async function getRootServ(req) {
// }

// export async function getCartServ(req) {
// }

// export async function getLoginServ(req) {
// }

// export async function postLoginServ(req) {
// }

// export async function getLogoutServ(req) {
// }

// export async function getRegisterServ(req) {
// }
