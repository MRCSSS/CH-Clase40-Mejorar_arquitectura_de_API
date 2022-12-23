/* ============================ MODULOS ============================= */
import bcrypt from 'bcrypt';
import { unlink } from 'node:fs';
// import { createTransport } from 'nodemailer';
import CartsDaoMongoDB from '../models/daos/CartsMongoDB.DAO.js';
import MessagesDaoMongoDB from '../models/daos/MessagesMongoDB.DAO.js';
import ProductsDaoMongoDB from '../models/daos/ProductsMongoDB.DAO.js';
import UsersDaoMongoDB from '../models/daos/UsersDaoMongoDB.DAO.js';

/* ====================== INSTANCIA DE ROUTER ======================= */
const cartsDao    = new CartsDaoMongoDB()     ;
const msgsDao     = new MessagesDaoMongoDB()  ;
const productsDao = new ProductsDaoMongoDB()  ;
const usersDao    = new UsersDaoMongoDB()     ;
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
    console.log("email => ", email);
    const {name, username} = await usersDao.searchUser(email);
    console.log("name => ", name);
    console.log("username => ", username);
    return {name, username};
}

export async function postRegisterServ(formData, fileData) {
    const userExists = await usersDao.searchUser(formData.username);

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
    await usersDao.save(newUser);

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
