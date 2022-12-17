/* ============================ MODULOS ============================= */
import { getCartServ, getRegisterServ, postRegisterServ, getHomeServ, getLoginServ, getLogoutServ, postLoginServ } from "../services/dominio.services.js";
import { logger } from "../utils/logger.js";

/* =========================== FUNCIONES ============================ */
    /* ------------------------ Loggers ------------------------ */
function loggReq(status, route){
    logger.info(`{ status: '${status}', route: '${route}' }`);
}
function loggErr(route, error){
    logger.error(`{ status: 500, route: '${route}', error: '${error}' }`);
}

/* ========================== CONTROLLERS  ========================== */
export function getRootCtrlr(req, res) {
    // await getRootServ(req);
    const route = `${req.method} ${req.baseUrl} ${req.url}`;
    const status = 200;
    res.status(status);
    loggReq(status, route);
    !req.session.user ? res.redirect('/login') : res.redirect('/home');
}

export async function getHomeCtrlr(req, res) {
    try {
        const data = await getHomeServ(req);
        if(data !== null){
            res.render('partials/home', { layout: 'home', user: data.name, email: data.username });
        } else {
            res.redirect('/');
        }
    } catch (error) {
        res.render('partials/error-page', { layout: 'home' });
    }
}

export async function getLoginCtrlr(req, res) {
    try {
        await getLoginServ(req);
        res.render('partials/login', {layout: 'login'});
    } catch (error) {
        res.render('partials/error-page', { layout: 'login' });
    }
}

export async function postLoginCtrlr(req, res) {
    try {
        await postLoginServ(req);
    } catch (error) {
        res.render('partials/login-error', { layout: 'login' });
    }
}

export async function getLogoutCtrlr(req, res) {
    try {
        const data = await getLogoutServ(req);
        res.render('partials/logout', { layout: 'logout', user: data.username });
    } catch (error) {
        res.render('partials/error-page', { layout: 'home' });
    }
}

export async function getRegisterCtrlr(req, res) {
    try {
        await getRegisterServ(req);
        res.render('partials/register', {layout: 'register'});
    } catch (error) {
        res.render('partials/error-page', { layout: 'register' });
    }
}

export async function postRegisterCtrlr(req, res) {
    try {
        const data = await postRegisterServ(req);
        if (data === 'userExists') {
            res.render('partials/register-error', { layout: 'register' });
        }
        res.redirect('../login');
    } catch (error) {
        res.render('partials/register-error', { layout: 'register' });
    }
}

export async function getCartCtrlr(req, res) {
    try {
        await getCartServ(req);
        res.render('partials/cart', {layout: 'cart'});
    } catch (error) {
        res.render('partials/error-page', { layout: 'cart' });
    }
}
