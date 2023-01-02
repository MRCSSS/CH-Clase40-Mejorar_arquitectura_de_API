/* =================================== MODULES =================================== */
import connectMongo from 'connect-mongo';                       // Conexión a MondoDB
import express from 'express';                                  // Entorno de trabajo para la appweb (web framework)
import { create } from 'express-handlebars';                    // Plantillas con Express
import session from 'express-session';                          // Middleware de sesiones para Express
import path from 'path';                                        // Módulo para trabajar con paths de archivos y directorios
import router from './src/routers/index.routes.js';             // 
import viewsRoutes from './src/views/routes.js';                // 
import { config } from './src/config/config.js';                // Archivo de configuración
import * as middlewares from './src/middlewares/index.js';      //
import cookieParser  from 'cookie-parser';
import passport from 'passport';
/* ================================== INSTANCES ================================== */
const app = express();                                          // Instanciando Express (Creando aplicación)
const exphbs = create({                                         // Instanciando Handlebars con configuración
    defaultLayout: null,                                            // 
    extname: 'hbs',                                                 // 
});
const MongoStore = connectMongo.create({                        // Instanciando Conexión a MondoDB con configuración (PERSISTENCIA DE SESION MONGO)
    mongoUrl: config.mongoDB.url,                                   // 
    ttl: 10 *60,                                                    // Minutos *60
}); 
/* ================================= MIDDLEWARES ================================= */
app.use(express.json());                                        // Method in-built, reconoce el request object como JSON.
app.use(express.urlencoded({ extended: true}));                 // Method in-built, reconoce el request object como strings o arreglos.
app.use(express.static('public'));                              // Asigna carpeta pública estática
app.use(cookieParser());                                        // Parsea el contenido de cookies
// app.use(passport.initialize());
// app.use(passport.session());

/*     ---------------------------- Session Setup ----------------------------     */
app.use(session({                                               // Parámetros de la sesion
    store: MongoStore,                                              // Conexión a MongoDB
    secret: config.mongoDB.key,                                     // Clave usada para identificar cookie de ID de sesión
    resave: false,                                                  // Forza a la sesion a guardarse sin interacción
    saveUninitialized: false,                                       // Forza guardar sesion no inicializada
    rolling: true,                                                  // Forza a cookie de identificador de sesion reiniciar con cada interacción
}));
/*     --------------------------- Motor Templates ---------------------------     */
app.engine('hbs', exphbs.engine);                               // 
app.set('views', path.join(process.cwd(), 'src/views'));        // 
app.set('view engine', 'hbs');                                  // 
/*     ----------------------------- Error Manage ----------------------------     */
app.use(middlewares.errorHandler);                              //
/* ==================================== ROUTES =================================== */
app.use('/apiV1', router);                                      // 
app.use('/', viewsRoutes);                                      // 
/* =============================== EXPORTED MODULES ============================== */
export default app;
