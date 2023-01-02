/* =================================== MODULES =================================== */
import * as service from "./service.js";
import * as dto from "./dto.js";
import * as userService from './service.js';
import logger from '../../utils/logger.js';
/* ================================== INSTANCES ================================== */
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/images');
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}_${file.originalname}`);
//     }
// });
// const upload = multer({storage: storage});
/* ================================== FUNCTIONS ================================== */
/* ================================= MIDDLEWARES ================================= */
    /* ----------------------- Passport ------------------------ */
// passport.use(new LocalStrategy(
//     async function(username, password, done) {
//         const user = await usersDao.searchUser(username);

//         if (user === null) {
//             return done(null, false);
//         } else {
//             const match = await bcrypt.compare(password, user.password);

//             if(!match){
//                 return done(null, false);
//             }
//             return done(null, user);
//         }
//     }
// ));
// passport.serializeUser((user, done)=>{
//     done(null, user.username);
// });
// passport.deserializeUser( async (username, done)=>{
//     const user = await usersDao.searchUser(username);
//     done(null, user);
// });
// siteOper.use(passport.initialize());
// siteOper.use(passport.session());

/* ================================= CONTROLLERS ================================= */
export async function register(req,res) {
    const data = await service.getRoot(req.body);
    try {
        await cartService.createCart();
        logger.info(`status: 200, route: '${req.method} ${req.baseUrl} ${req.url}'`);
        return res.status(201);
    } catch (error) {
        logger.error(`status: 500, route: '${req.method} ${req.baseUrl} ${req.url}', error: '${error}' }`);
        return res.status(500);
    }
};

export async function login(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function updateUser(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function deleteUser(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function getAllUsers(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};

export async function deleteAllUsers(req,res) {
    const data = await service.getRoot(req.body);
    return dto.data(data);
};
