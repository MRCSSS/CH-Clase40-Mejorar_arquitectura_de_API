/* ============================ MODULOS ============================= */
import { Router } from "express";
import * as controller from "./controller.js";
/* ====================== INSTANCIA DE ROUTER ======================= */
const viewsRoutes = Router();
/* ========================== MIDDLEWARES =========================== */
/* ============================== RUTAS ============================= */
viewsRoutes.get  ('/',         controller.getRoot);
viewsRoutes.get  ('/cart',     controller.getCart);
viewsRoutes.get  ('/home',     controller.getHome);
viewsRoutes.get  ('/login',    controller.getLogin);
viewsRoutes.post ('/login',    controller.postLogin);
viewsRoutes.get  ('/logout',   controller.getLogout);
viewsRoutes.post ('/logout',   controller.postLogout);
viewsRoutes.get  ('/register', controller.getRegister);
viewsRoutes.post ('/register', controller.postRegister);

/* ====================== MODULOS EXPORTADOS ======================== */
export default viewsRoutes;
