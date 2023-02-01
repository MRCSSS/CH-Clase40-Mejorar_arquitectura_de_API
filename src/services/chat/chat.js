/* =================================== MODULES =================================== */
import { httpServer } from '../../../app.js';
// import { normalize, schema } from 'normalizr';
// import { Server } from 'socket.io';
// import { msgsDao, productsDao } from './src/models/daos/index.js';
/* ================================== INSTANCES ================================== */
// const io = new Server(httpServer);          // 
/* ===================== NORMALIZANDO MENSAJES ====================== */
// const authorSchema = new schema.Entity('author', {}, { idAttribute: 'email' });                         // 
// const messageSchema = new schema.Entity('post', { author: authorSchema }, { idAttribute: 'id' });       // 
// const msgsSchema = new schema.Entity('posts', { messages: [messageSchema] }, { idAttribute: 'id' });    // 
// const normalizing = (fullMsgs) => normalize(fullMsgs, msgsSchema);                                      // 

// async function getAllNormalized() {                 // 
//     const msgs = await msgsDao.getAll();                // 
//     return normalizing({ id: 'messages', msgs});        // 
// }

/* ============================ WEBSOCKET =========================== */
// io.on('connection', async (socket) => {                             // 
//     logger.info(`Client conected: ${socket.id}`);                       // 

//     socket.emit('serv-msgs', await getAllNormalized());                 // 
//     socket.emit('serv-prods', await productsDao.getAll());              // 

//     socket.on('client-msg', async (msg) => {                            // 
//         await msgsDao.save(msg);                                            // 
//         io.sockets.emit('serv-msgs', await getAllNormalized());             // 
//     });
//     socket.on('client-prods', async (prod) => {                         // 
//         await productsDao.save(prod);                                       // 
//         io.sockets.emit('serv-prods', await productsDao.getAll());          // 
//     });
// });

