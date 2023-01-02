/* =================================== MODULES =================================== */
import logger from '../utils/logger.js';
/* ================================== INSTANCES ================================== */

/* ================================== FUNCTIONS ================================== */
async function reqInit(req){
    const auth = req.session.passport ? true : false;
    const route = `${req.method} ${req.baseUrl} ${req.url}`;

    return {auth, route} ;
}
/* ================================= CONTROLLERS ================================= */
export async function getRoot(req,res) {
    const {auth, route} = await reqInit(req);
    try {
        logger.info(`{ status: '200', route: '${route}' }`);
        if (auth === false){
            return res.redirect('/login');
        } else {
            return res.redirect('/home');
        }
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        res.render('partials/error-page', {layout: 'login'});
    }
};

export async function getCart(req,res) {
    const {auth, route} = await reqInit(req);
    try {
        logger.info(`{ status: '200', route: '${route}' }`);
        if (auth === false){
            res.redirect('/login');
        } else {
            res.render('partials/cart', {layout: 'cart'});
        }
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        res.render('partials/error-page', {layout: 'cart'});
    }
};

export async function getHome(req,res) {
    const {auth, route} = await reqInit(req);
    try {
        res.status(200);
        logger.info(`{ status: '200', route: '${route}' }`);
        if (auth === false){
            res.redirect('/login');
        } else {
            res.render('partials/home', { layout: 'home' });
        }
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        res.render('partials/error-page', {layout: 'login'});
    }
};

export async function getLogin(req,res) {
    const {route} = await reqInit(req);
    try {
        logger.info(`{ status: '200', route: '${route}' }`);
        res.render('partials/login', { layout: 'login' });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        res.render('partials/error-page', {layout: 'login'});
    }
};

export async function postLogin(req,res) {
    // const {route} = await reqInit(req);
    // try {
    //     logger.info(`{ status: '200', route: '${route}' }`);
    //     passport.authenticate('local', { 
    //         successRedirect: '/home', 
    //         failureRedirect: '/login' 
    //     });
    // } catch (error) {
    //     logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
    //     return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
    // }
};

export async function getLogout(req,res) {
    const {route} = await reqInit(req);
    try {
        logger.info(`{ status: '200', route: '${route}' }`);
        res.render('partials/logout', { layout: 'logout' });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        res.render('partials/error-page', {layout: 'logout'});
    }
};

export async function postLogout(req,res) {
    // const {route} = await reqInit(req);
    // try {
    //     res.status(200);
    //     logger.info(`{ status: '200', route: '${route}' }`);
    //     req.session.destroy();
    //     res.redirect('../logout');
    // } catch (error) {
    //     logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
    //     return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
    // }
};

export async function getRegister(req,res) {
    const {auth, route} = await reqInit(req);
    try {
        res.status(200);
        logger.info(`{ status: '200', route: '${route}' }`);
        if (auth === true){
            res.render('partials/home', { layout: 'home' });
        } else {
            res.render('partials/register', {layout: 'register'});
        }
        // return res.status(200).json({ status: 200, route: route, data: data });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        res.render('partials/error-page', {layout: 'register'});
    }
};

export async function postRegister(req,res) {
    // const {route} = await reqInit(req);
    // try {
    //     const formData = req.body;
    //     const fileData = req.file;
    //     const data = await postRegisterServ(formData, fileData);
    //     res.status(200);
    //     logger.info(`{ status: '200', route: '${route}' }`);
    //     if (data === 'userExists') {
    //         res.render('partials/register-error', { layout: 'register' });
    //     } else {
    //         res.redirect('../login');
    //     }
    // } catch (error) {
    //     logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
    //     return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
    // }
};

/* ============================ MODULOS ============================= */
// import { createTransport } from 'nodemailer';

/* ====================== INSTANCIA DE ROUTER ======================= */
// const cartsDao    = new CartsDaoMongoDB()     ;
// const msgsDao     = new MessagesDaoMongoDB()  ;
// const productsDao = new ProductsDaoMongoDB()  ;
// const usersDao    = new UsersDaoMongoDB()     ;
// const transporter = createTransport({
//     host: 'smtp.hostinger.com',
//     port: 465,
//     auth: {
//         user: config.mailSender,
//         pass: config.mailSendPswrd
//     }
// });

// const client = twilio(config.accountSid, config.authToken);

/* =========================== SERVICIOS ============================ */
// export async function postRegisterServ(formData, fileData) {
//     const userExists = await usersDao.searchUser(formData.username);

//     if (userExists !== null) {
//         unlink(`${fileData.path}`);
//         return 'userExists';
//     }

//     const {name, username, age, password, phone, address} = formData;
//     const imgName = fileData.filename;
//     const newUser = {
//         name,
//         password: await bcrypt.hash(password, 10),
//         username,
//         age,
//         address,
//         phone,
//         userImg: imgName
//     };
//     await usersDao.save(newUser);

//     return null;
// }
