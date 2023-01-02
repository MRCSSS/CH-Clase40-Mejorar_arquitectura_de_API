/* =================================== MODULES =================================== */
import { Router } from "express";    
import * as cartCtrlr from './controller.js';
/* ================================== INSTANCES ================================== */
const cartRouter = Router();
/* =================================== ROUTES  =================================== */
//     - Carts
cartRouter.route ('/')
    .get    (cartCtrlr.getAllCarts)
    .post   (cartCtrlr.postCart)
cartRouter.route ('/:id')
    .delete (cartCtrlr.deleteCart)
//     - Cart products
cartRouter.route ('/:id/products')
    .get    (cartCtrlr.getProducts)
    .post   (cartCtrlr.postProducts)
cartRouter.route ('/:id/products/:id_prod')
    .delete (cartCtrlr.deleteProduct)
/* =============================== EXPORTED MODULES ============================== */
export default cartRouter;
