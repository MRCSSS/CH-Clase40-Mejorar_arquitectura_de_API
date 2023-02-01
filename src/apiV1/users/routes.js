/* =================================== MODULES =================================== */
import { Router } from "express";
import multer from "multer";
import userController from './controller.js';
import passport from "passport";
import LocalStrategy from "passport-local";
import UsersDAOFactory from './classes/DAOFactory.class.js';
import bcrypt from 'bcrypt';
/* ================================== INSTANCES ================================== */
const controller = new userController();
const userRouter = Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/user');
    },
    filename: (req, file, cb) => {
        const regex = /\s/g;
        const newFileName=file.originalname.replace(regex, '%');

        cb(null, `${Date.now()}_${newFileName}`);
    }
});
const upload = multer({storage: storage});
const DAO = UsersDAOFactory.get(); 
/* ================================= MIDDLEWARES ================================= */
    /* ----------------------- Passport ------------------------ */
passport.use(new LocalStrategy(
    async function(username, password, done) {
        const user = await DAO.searchUser(username);
        if (user === null) {
            return done(null, false);
        } else {
            const match = await bcrypt.compare(password, user.password);
            if(!match){ return done(null, false); }
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
/* ==================================== ROUTES =================================== */
//     - Register
userRouter.route ('/register')
    .post   (upload.single('userImg'), controller.register)
//     - Login
userRouter.route ('/login')
    .post   (passport.authenticate('local', {
            successRedirect: '../../',
            failureRedirect: '../../',
            passReqToCallback: true,
            failureMessage: true,
        })
    )
//     - User
userRouter.route ('/:id')
    .get    (controller.getUser)
    .put    (controller.updateUser)
    .delete (controller.deleteUser)
//     - All Users
userRouter.route ('/')
    .get    (controller.getAllUsers)
    .delete (controller.deleteAllUsers)
/* =============================== EXPORTED MODULES ============================== */
export default userRouter;