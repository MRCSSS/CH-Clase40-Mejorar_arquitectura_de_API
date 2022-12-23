/* ============================ MODULOS ============================= */
import {  postRegisterServ, getHomeServ } from "../services/dominio.services.js";
import logger from "../config/logger.js";
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

/* =========================== FUNCIONES ============================ */
async function reqInit(req){
    const auth = req.session.passport ? true : false;
    const route = `${req.method} ${req.baseUrl} ${req.url}`;

    return {auth, route} ;
}

    /* ----------------------- Passport ------------------------ */
passport.use(new LocalStrategy(
    async function(username, password, done) {
        const user = await usersDao.searchUser(username);

        if (user === null) {
            return done(null, false);
        } else {
            const match = await bcrypt.compare(password, user.password);

            if(!match){
                return done(null, false);
            }
            return done(null, user);
        }
    }
));
passport.serializeUser((user, done)=>{
    done(null, user.username);
});
passport.deserializeUser( async (username, done)=>{
    const user = await usersDao.searchUser(username);
    done(null, user);
});
siteOper.use(passport.initialize());
siteOper.use(passport.session());




/* ========================== CONTROLLERS  ========================== */
export async function getRootCtrlr(req, res) {
    const {auth, route} = await reqInit(req);
    try {
        res.status(200)
        logger.info(`{ status: '200', route: '${route}' }`);
        if (auth === false){
            return res.redirect('/login');
        } else {
            return res.redirect('/home');
        }
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
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
            // const data = await 
            // return res.status(200).json({ status: 200, route: route, data: data });
            res.render('partials/cart', {layout: 'cart'});
        }
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
    }
}

export async function getHomeCtrlr(req, res) {
    const {auth, route} = await reqInit(req);
    try {
        res.status(200);
        logger.info(`{ status: '200', route: '${route}' }`);
        if (auth === false){
            res.redirect('/login');
        } else {
            const { name, username } = await getHomeServ(req.session.passport.user);
            res.render('partials/home', { layout: 'home', user: name, email: username });
        }
        // return res.status(200).json({ status: 200, route: route, data: data });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
    }
}

export async function getLoginCtrlr(req, res) {
    const {route} = await reqInit(req);
    try {
        // const data = await 
        logger.info(`{ status: '200', route: '${route}' }`);
        // return res.status(200).json({
        //     status: 200,
        //     route: route,
        //     data: data,
        // });
        res.render('partials/login', { layout: 'login' });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
    }
}

export async function postLoginCtrlr(req, res) {
    const {route} = await reqInit(req);
    try {
        logger.info(`{ status: '200', route: '${route}' }`);
        passport.authenticate('local', { 
            successRedirect: '/home', 
            failureRedirect: '/login' 
        });
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
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
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
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
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
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
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
    }
}

export async function postRegisterCtrlr(req, res) {
    const {route} = await reqInit(req);
    try {
        const formData = req.body;
        const fileData = req.file;
        const data = await postRegisterServ(formData, fileData);
        res.status(200);
        logger.info(`{ status: '200', route: '${route}' }`);
        if (data === 'userExists') {
            res.render('partials/register-error', { layout: 'register' });
        } else {
            res.redirect('../login');
        }
    } catch (error) {
        logger.error(`{ status: 500, route: '${route}', ${error.name}: '${error.message}' }`);
        return res.status(500).json({ status: 500, route: route, err: error.name, err_msg: error.message }); 
    }
}
