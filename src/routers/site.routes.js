/* ============================ MODULOS ============================= */
import bcrypt from 'bcrypt';
import { Router } from "express";
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { getRegisterCtrlr, getCartCtrlr, postRegisterCtrlr, getHomeCtrlr, getLoginCtrlr, getLogoutCtrlr, getRootCtrlr, postLogoutCtrlr } from "../controllers/dominio.controller.js";
import { usersDao } from '../models/daos/index.js';
import multer from 'multer';

/* ====================== INSTANCIA DE ROUTER ======================= */
const siteOper = Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({storage: storage});

/* ========================== MIDDLEWARES =========================== */
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

/* ============================== RUTAS ============================= */
siteOper.get  ('/',         getRootCtrlr);
siteOper.get  ('/cart',     getCartCtrlr);
siteOper.get  ('/home',     getHomeCtrlr);
siteOper.get  ('/login',    getLoginCtrlr);
siteOper.post ('/login',    passport.authenticate('local', { successRedirect: '/home', failureRedirect: '/login-error' }));
siteOper.get  ('/logout',   getLogoutCtrlr);
siteOper.post ('/logout',   postLogoutCtrlr);
siteOper.get  ('/register', getRegisterCtrlr);
siteOper.post ('/register', upload.single('userImg'), postRegisterCtrlr);

/* ====================== MODULOS EXPORTADOS ======================== */
export default siteOper;