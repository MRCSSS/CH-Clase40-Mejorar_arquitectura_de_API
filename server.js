/* ============================ MODULOS ============================= */
import connectMongo from 'connect-mongo'; // Conexión a MondoDB
import express from 'express'; // Entorno de trabajo para la appweb (web framework)
import { create } from 'express-handlebars'; // Plantillas con Express
import session from 'express-session'; // Middleware de sesiones para Express
import { createServer } from 'http';
// import { normalize, schema } from 'normalizr';
import path from 'path'; // Módulo para trabajar con paths de archivos y directorios
import { Server } from 'socket.io';
import { msgsDao, productsDao, usersDao } from './src/daos/index.js';
import siteOper from './src/routers/site.routes.js';
import {config} from './src/utils/config.js';   // Archivo de configuración
import {logger} from './src/utils/logger.js';   // Archivo de loggers

/* ====================== INSTANCIA DE SERVER ======================= */
const app = express();  // Instanciando Express (Creando aplicación)
const httpServer = createServer(app);
const io = new Server(httpServer);
const exphbs = create({ // Instanciando Handlebars con configuración
    defaultLayout: null,
    extname: 'hbs'
});
const MongoStore = connectMongo.create({    // Instanciando Conexión a MondoDB con configuración (PERSISTENCIA DE SESION MONGO)
    mongoUrl: config.mongoDB.url,
    ttl: 10 *60 // Minutos *60
});

/* ========================== MIDDLEWARES =========================== */
app.use(express.json());    // Method in-built, reconoce el request object como JSON.
app.use(express.urlencoded({ extended: true}));    // Method in-built, reconoce el request object como strings o arreglos.
app.use(express.static('public'));  // Asigna carpeta pública estática
    /* --------------------- Session Setup --------------------- */
app.use(session({   // Parámetros de la sesion
    store: MongoStore,  // Conexión a MongoDB
    secret: config.mongoDB.key, // Clave usada para identificar cookie de ID de sesión
    resave: false,  // Forza a la sesion a guardarse sin interacción
    saveUninitialized: false,   // Forza guardar sesion no inicializada
    rolling: true   // Forza a cookie de identificador de sesion reiniciar con cada interacción
}));
    /* ------------------ Motor de Plantillas ------------------ */
app.engine('hbs', exphbs.engine);
app.set('views', path.join(process.cwd(), 'src/views'));
app.set('view engine', 'hbs');

/* ============================== RUTAS ============================= */
app.use('/', siteOper);
app.all('*', (req, res)=>{
    logger.warn(`{ url: '${req.baseUrl}${req.url}', method: '${req.method}' }`);
    res.render('partials/page-not-found', { layout: 'home' });
});

/* ===================== NORMALIZANDO MENSAJES ====================== */
// const authorSchema = new schema.Entity('author', {}, { idAttribute: 'email' });
// const messageSchema = new schema.Entity('post', { author: authorSchema }, { idAttribute: 'id' });
// const msgsSchema = new schema.Entity('posts', { messages: [messageSchema] }, { idAttribute: 'id' });
// const normalizing = (fullMsgs) => normalize(fullMsgs, msgsSchema);

// async function getAllNormalized() {
//     const msgs = await msgsDao.getAll();
//     return normalizing({ id: 'messages', msgs});
// }

/* ============================ WEBSOCKET =========================== */
io.on('connection', async (socket) => {
    logger.info(`Client conected: ${socket.id}`);

    // socket.emit('serv-msgs', await getAllNormalized());
    socket.emit('serv-prods', await productsDao.getAll());

    // socket.on('client-msg', async (msg) => {
    //     await msgsDao.save(msg);
    //     io.sockets.emit('serv-msgs', await getAllNormalized());
    // });
    socket.on('client-prods', async (prod) => {
        await productsDao.save(prod);
        io.sockets.emit('serv-prods', await productsDao.getAll());
    });
});

/* ============================ SERVIDOR ============================ */
const server = httpServer.listen(config.port, () => {
    logger.info(`Server listening at PORT: ${config.port}`);
});
server.on('error', err => { logger.error(`Server error: ${err}`); });
