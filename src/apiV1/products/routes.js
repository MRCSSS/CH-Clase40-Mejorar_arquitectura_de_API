/* =================================== MODULES =================================== */
import { Router } from "express";    
import * as prodCtrlr from './controller.js';
/* ================================== INSTANCES ================================== */
const prodRouter = Router();
/* ==================================== ROUTES =================================== */
prodRouter.route ('/')
    .get    (prodCtrlr.getAllProducts)
    .delete (prodCtrlr.deleteAllProducts)
    .post   (prodCtrlr.postProduct)
prodRouter.route ('/:id')
    .get    (prodCtrlr.getProduct)
    .put    (prodCtrlr.updateProduct)
    .delete (prodCtrlr.deleteProduct)
/* =============================== EXPORTED MODULES ============================== */
export default prodRouter;
