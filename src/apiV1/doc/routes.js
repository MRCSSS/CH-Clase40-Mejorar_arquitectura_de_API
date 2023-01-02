/* =================================== MODULES =================================== */
import { Router } from "express";    
import * as docuCtrlr from "./controller.js";
/* ================================== INSTANCES ================================== */
const docuRouter = Router();
/* ==================================== ROUTES =================================== */
docuRouter.route ('/')
    .get    (docuCtrlr.getDoc)
/* =============================== EXPORTED MODULES ============================== */
export default docuRouter;
