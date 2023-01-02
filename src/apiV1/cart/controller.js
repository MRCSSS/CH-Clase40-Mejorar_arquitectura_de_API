/* =================================== MODULES =================================== */
import * as cartService from "./service.js";
import * as cartDTO from "./dto.js";
import logger from "../../utils/logger.js";
// import CustomError from "../../classes/CustomError.class.js";
/* ================================== INSTANCES ================================== */

/* ================================== FUNCTIONS ================================== */

/* ================================= CONTROLLERS ================================= */
export async function getAllCarts(req,res) {
    try {
        const carts = await cartService.getAllCarts();
        const data = new cartDTO.cartsList(carts);
        logger.info(`status: 200, route: '${req.method} ${req.baseUrl} ${req.url}'`);
        return res.status(200).json({ carts: data });
    } catch (error) {
        // let {code, description, detail}
        // const e = new CustomError(error.code,)
        // logger.error(`status: 500, route: '${req.method} ${req.baseUrl} ${req.url}', error: '${new CustomError() }' }`);
        logger.error(`status: 500, route: '${req.method} ${req.baseUrl} ${req.url}', error: '${error}' }`);
        return res.status(500);
    }
};

export async function postCart(req,res) {
    try {
        await cartService.createCart();
        logger.info(`status: 200, route: '${req.method} ${req.baseUrl} ${req.url}'`);
        return res.status(201);
    } catch (error) {
        logger.error(`status: 500, route: '${req.method} ${req.baseUrl} ${req.url}', error: '${error}' }`);
        return res.status(500);
    }
};

export async function deleteCart(req,res) {
    try {
        await cartService.deleteCart(req.params.id);
        logger.info(`status: 200, route: '${req.method} ${req.baseUrl} ${req.url}'`);
        return res.status(200);
    } catch (error) {
        logger.error(`status: 500, route: '${req.method} ${req.baseUrl} ${req.url}', error: '${error}' }`);
        return res.status(500);
    }
};

export async function getProducts(req,res) {
    try {
        const products = await cartService.getProducts(req.params.id);
        const data = await cartDTO.productsList(products);
        logger.info(`status: 200, route: '${req.method} ${req.baseUrl} ${req.url}'`);
        return res.status(200).json({ products: data });;
    } catch (error) {
        logger.error(`status: 500, route: '${req.method} ${req.baseUrl} ${req.url}', error: '${error}' }`);
        return res.status(500);
    }
};

export async function postProducts(req,res) {
    try {
        await cartService.postProducts(req.params.id, req.body);
        logger.info(`status: 200, route: '${req.method} ${req.baseUrl} ${req.url}'`);
        return res.status(200);
    } catch (error) {
        logger.error(`status: 500, route: '${req.method} ${req.baseUrl} ${req.url}', error: '${error}' }`);
        return res.status(500);
    }
};

export async function deleteProduct(req,res) {
    try {
        await cartService.deleteProduct(req.params.id,req.params.id_product);
        logger.info(`status: 200, route: '${req.method} ${req.baseUrl} ${req.url}'`);
        return res.status(200);
    } catch (error) {
        logger.error(`status: 500, route: '${req.method} ${req.baseUrl} ${req.url}', error: '${error}' }`);
        return res.status(500);
    }
};


// cartsRouter.get('/', async (req, res)=>{
//     const products = await carts.getAll();
//     return res.status(200).json({ products: products.productos });
// });

// cartsRouter.post('/', async (req, res)=>{
//     return res.status(201).json({ id: await carts.save({ productos: [] }) });
// });

// cartsRouter.delete('/:id', async (req, res)=>{
//     await carts.deleteById(req.params.id)
//     return res.status(200).json({ msg: 'Cart deleted!' });
// });

// cartsRouter.get('/:id/productos', async (req, res)=>{
//     const cartSelected = await carts.getById(req.params.id)
//     return res.status(200).json({ products: cartSelected.productos });
// });

// cartsRouter.post('/:id/productos', async (req, res)=>{
//     const cartSelected = await carts.getById(req.params.id)
//     const prodSelected = await prods.getById(req.body.id)
//     cartSelected.productos.push(prodSelected)
//     return res.status(200).json(await carts.update(cartSelected, req.params.id));
// });

// cartsRouter.delete('/:id/productos/:id_prod', async (req, res)=>{
//     const cartSelected = await carts.getById(req.params.id)
//     const index = cartSelected.productos.findIndex(prod => prod.id == req.params.id_prod)
        
//     if (index != -1) {
//         cartSelected.productos.splice(index, 1)
//         return res.status(200).json({ msg: 'Product in cart deleted!', description: await carts.update(cartSelected, req.params.id)})
//     }
//     return res.status(204).json({ msg: '', description: '' })
// });
