/* ============================ MODULOS ============================= */
import {  postRegisterServ, getHomeServ } from "../services/dominio.services.js";
import { logger } from "../utils/logger.js";

/* =========================== FUNCIONES ============================ */
async function reqInit(req){
    const auth = req.session.passport ? true : false;
    const route = `${req.method} ${req.baseUrl} ${req.url}`;

    return {auth, route} ;
}

/* ========================== CONTROLLERS  ========================== */
export async function getRootCtrlr(req, res) {
    const {auth, route} = await reqInit(req);
    try {
        res.status(200)
        logger.info(`{ status: '200', route: '${route}' }`);
        if (auth === false){
            res.redirect('/login');
        } else {
            res.redirect('/home');
        }
        // return res.status(200).json({ status: 200, route: route, data: data });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', error: '${error}' }`);
        return res.status(500).json({ status: 500, route: route, error: error }); 
    }
}

export async function getCartCtrlr(req, res) {
    const {auth, route} = await reqInit(req);
    try {
        res.status(200)
        logger.info(`{ status: '200', route: '${route}' }`);
        if (auth === false){
            res.redirect('/login');
        } else {
            res.render('partials/cart', {layout: 'cart'});
        }
        // return res.status(200).json({ status: 200, route: route, data: data });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', error: '${error}' }`);
        return res.status(500).json({ status: 500, route: route, error: error }); 
    }
}

export async function getHomeCtrlr(req, res) {
    const {auth, route} = await reqInit(req);
    try {
        const { name, username } = await getHomeServ(req.session.passport.user);
        res.status(200)
        logger.info(`{ status: '200', route: '${route}' }`);
        if (auth === false){
            res.redirect('/login');
        } else {
            res.render('partials/home', { layout: 'home', user: name, email: username });
        }
        // return res.status(200).json({ status: 200, route: route, data: data });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', error: '${error}' }`);
        return res.status(500).json({ status: 500, route: route, error: error }); 
    }
}

export async function getLoginCtrlr(req, res) {
    const {route} = await reqInit(req);
    try {
        res.status(200)
        logger.info(`{ status: '200', route: '${route}' }`);
        res.render('partials/login', { layout: 'login' });
        // return res.status(200).json({ status: 200, route: route, data: data });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', error: '${error}' }`);
        return res.status(500).json({ status: 500, route: route, error: error }); 
    }
}

export async function postLoginCtrlr(req, res) {
    const {route} = await reqInit(req);
    try {
        res.status(200);
        logger.info(`{ status: '200', route: '${route}' }`);
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', error: '${error}' }`);
        return res.status(500).json({ status: 500, route: route, error: error }); 
    }
}

export async function getLogoutCtrlr(req, res) {
    const {route} = await reqInit(req);
    try {
        // const data = await getHomeServ(req.session.passport.user);
        res.status(200)
        logger.info(`{ status: '200', route: '${route}' }`);
        res.render('partials/logout', { layout: 'logout' });
        // return res.status(200).json({ status: 200, route: route, data: data });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', error: '${error}' }`);
        return res.status(500).json({ status: 500, route: route, error: error }); 
    }
}

export async function postLogoutCtrlr(req, res) {
    const {route} = await reqInit(req);
    try {
        res.status(200);
        logger.info(`{ status: '200', route: '${route}' }`);
        req.session.destroy();
        res.redirect('../logout');
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', error: '${error}' }`);
        return res.status(500).json({ status: 500, route: route, error: error }); 
    }
}

export async function getRegisterCtrlr(req, res) {
    const {auth, route} = await reqInit(req);
    try {
        res.status(200);
        logger.info(`{ status: '200', route: '${route}' }`);
        if (auth === true){
            const { name, username } = await getHomeServ(req.session.passport.user);
            res.render('partials/home', { layout: 'home', user: name, email: username });
        } else {
            res.render('partials/register', {layout: 'register'});
        }
        // return res.status(200).json({ status: 200, route: route, data: data });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', error: '${error}' }`);
        return res.status(500).json({ status: 500, route: route, error: error }); 
    }
}

export async function postRegisterCtrlr(req, res) {
    const {route} = await reqInit(req);
    try {
        const data = await postRegisterServ(req.body);
        res.status(200);
        logger.info(`{ status: '200', route: '${route}' }`);
        if (data === 'userExists') {
            res.render('partials/register-error', { layout: 'register' });
        } else {
            res.redirect('../login');
        }
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', error: '${error}' }`);
        return res.status(500).json({ status: 500, route: route, error: error }); 
    }
}

