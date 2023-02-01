/* =================================== MODULES =================================== */
import CustomError from "./CustomError.class.js";
/* ================================== CONTAINER ================================== */
class Container {    
    async getAll() {
        throw new CustomError(501, "Container: gerAll()", "not implemented!" );
    }

    async getById(id) {
        throw new CustomError(501, "Container: getById(id)", "not implemented!" );
    }

    async add(obj) {
        throw new CustomError(501, "Container: add(obj)", "not implemented!" );
    }
        
    async deleteById(id) {
        throw new CustomError(501, "Container: deleteById(id)", "not implemented!" );
    }

    async deleteAll() {
        throw new CustomError(501, "Container: deleteAll()", "not implemented!" );
    }

    async update(id, obj) {
        throw new CustomError(501, "Container: update(id, obj)", "not implemented!" );
    }
}
/* =============================== EXPORTED MODULES ============================== */
export default Container;