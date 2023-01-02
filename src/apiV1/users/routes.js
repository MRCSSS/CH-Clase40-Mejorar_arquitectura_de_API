/* =================================== MODULES =================================== */
import { Router } from "express";
import multer from "multer";
import * as userCtrlr from './controller.js';
/* ================================== INSTANCES ================================== */
const userRouter = Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({storage: storage});

/* ================================= MIDDLEWARES ================================= */
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

/* ==================================== ROUTES =================================== */
//     - Register
userRouter.route ('/register')
    .post   (userCtrlr.register)
//     - Login
userRouter.route ('/login')
    .post   (userCtrlr.login)
//     - User
userRouter.route ('/:id')
    .put    (userCtrlr.updateUser)
    .delete (userCtrlr.deleteUser)
//     - All Users
userRouter.route ('/')
    .get    (userCtrlr.getAllUsers)
    .delete (userCtrlr.deleteAllUsers)
/* =============================== EXPORTED MODULES ============================== */
export default userRouter;
