/* =================================== MODULES =================================== */
import { Router } from "express";
import cartRouter from '../apiV1/cart/routes.js';
import userRouter from '../apiV1/users/routes.js';
import prodRouter from '../apiV1/products/routes.js';
import docuRouter from '../apiV1/doc/routes.js';
import hChkRouter from '../apiV1/healtCk/routes.js';
/* ================================== INSTANCES ================================== */
const router = Router();
/* =================================== ROUTES  =================================== */
//     - Carts
router.use ('/cart', cartRouter);
//     - Users
router.use ('/user', userRouter);
//     - Products
router.use ('/products',prodRouter);
//     - Documentation
router.use ('/doc',docuRouter);
//     - Healt Check
router.use ('/healtCheck',hChkRouter);
/* ============================== EXPORTED MODULES  ============================== */
export default router;
