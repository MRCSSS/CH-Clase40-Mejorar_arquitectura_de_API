/* ============================ MODULOS ============================= */
import CustomError from '../../classes/CustomError.class.js';
import { config } from '../../config/config.js';
// import { logger } from '../../utils/logger.js';
import MongoDBClient from '../../classes/DbClientMongo.class.js';

// mongoose.set('strictQuery', true);
// await mongoose.connect(config.mongoDB.url);
/* ======================== CONTAINER CLASS ========================+ */
class ContMongoDB {
    constructor(model) {
        this.collection = model;
        this.container = new MongoDBClient();
    }


    // constructor(collectionName, squema) {
    //     this.collection = mongoose.model(collectionName, squema);
    // }

    async getAll() {
        try {
            let docs = await this.collection.find({});
            return docs;
        } catch (error) {
            const err = new CustomError(500, 'Error al listarAll()', error);
            // logger.error(err);
            throw err;
        }
    }

    async save(obj) {
        try {
            let newObj = await this.collection.create({ ...obj, timestamp: (new Date()).toString() });
            return newObj._id;
        } catch (error) {
            const err = new CustomError(500, 'Error al listarAll()', error);
            // logger.error(err);
            throw err;
        }
    }
}

/* ====================== MODULOS EXPORTADOS ======================== */
export default ContMongoDB;

// class ContMongoDB {
//     constructor(collectionName, squema) {
//         this.collection = mongoose.model(collectionName, squema);
//     }

//     async getAll() {
//         try {
//             let docs = await this.collection.find({});
//             return docs;
//         } catch (error) {
//             logger.error(`{ method: 'getAll()', error: '${error}' }`);
//         }
//     }

//     async getById(id) {
//         try {
//             const object = await this.collection.find({ '_id': id });

//             if ( object.length != 0 ) {
//                 return object;
//             } else {
//                 logger.error(`{ method: 'getById(id):collection.find', error: '${error}' }`);
//             }
//         } catch (error) {
//             logger.error(`{ method: 'getById(id)', error: '${error}' }`);
//         }
//     }

//     async save(obj) {
//         try {
//             let newObj = await this.collection.create({ ...obj, timestamp: moment().format('DD/MM/YY HH:mm:ss') });
//             // return newObj._id;
//         } catch (error) {
//             logger.error(`{ method: 'save(obj)', '${error}' }`);
//         }
//     }
        
//     async deleteById(id) {
//         try {
//             await this.collection.deleteOne({ '_id': id });
//         } catch (error) {
//             logger.error(`{ method: 'deleteById(id)', error: '${error}' }`);
//         }
//     }

//     async update(obj, id) {
//         try {
//             let beforObj = await this.collection.find({ '_id': id });

//             await this.collection.replaceOne({ '_id': id }, obj);
//             return { msg: 'Updated!', data: { 'before': beforObj, 'after': obj } }
//         } catch (error) {
//             logger.error(`{ method: 'update(obj, id)', error: '${error}' }`);
//         }
//     }
// }
