import CustomError from "./CustomError.class.js";

class UsersDao {    
    async getAll() {
        throw new CustomError(500, 'gerAll() not implemented!' );
    }

    async getById(id) {
        throw new CustomError(500, 'getById(id) not implemented!' );
    }

    async add(obj) {
        throw new CustomError(500, 'save(obj) not implemented!' );
    }
        
    async deleteById(id) {
        throw new CustomError(500, 'deleteById(id) not implemented!' );
    }

    async deleteAll() {
        throw new CustomError(500, 'deleteAll() not implemented!' );
    }

    async update(id, obj) {
        throw new CustomError(500, 'update(id, obj) not implemented!' );
    }

}

export default UsersDao;