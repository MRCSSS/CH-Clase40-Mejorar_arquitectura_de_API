/* =================================== MODULES =================================== */
import { Router } from "express";    
import * as hChkCtrlr from "./controller.js";
/* ================================== INSTANCES ================================== */
const hChkRouter = Router();       // 
/* ==================================== ROUTES =================================== */
hChkRouter.route ('/')
    .get    (hChkCtrlr.getHealtCk)
/* =============================== EXPORTED MODULES ============================== */
export default hChkRouter;
