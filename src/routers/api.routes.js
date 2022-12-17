/* ---------------------------- MODULOS ----------------------------- */
import { Router } from 'express';
import { productsDao as prods, cartsDao as carts} from '../daos/index.js';

/* -------------------------- INSTANCIAS  --------------------------- */
const cartsRouter = Router();

/* ------------------------------ RUTAS -----------------------------*/
cartsRouter.get('/', async (req, res)=>{
    const products = await carts.getAll();
    res.status(200).json({ products: products.productos });
});

cartsRouter.post('/', async (req, res)=>{
    res.status(201).json({ id: await carts.save({ productos: [] }) });
});

cartsRouter.delete('/:id', async (req, res)=>{
    await carts.deleteById(req.params.id)
    res.status(200).json({ msg: 'Cart deleted!' });
});

cartsRouter.get('/:id/productos', async (req, res)=>{
    const cartSelected = await carts.getById(req.params.id)
    res.status(200).json({ products: cartSelected.productos });
});

cartsRouter.post('/:id/productos', async (req, res)=>{
    const cartSelected = await carts.getById(req.params.id)
    const prodSelected = await prods.getById(req.body.id)
    cartSelected.productos.push(prodSelected)
    res.status(200).json(await carts.update(cartSelected, req.params.id));
});

cartsRouter.delete('/:id/productos/:id_prod', async (req, res)=>{
    const cartSelected = await carts.getById(req.params.id)
    const index = cartSelected.productos.findIndex(prod => prod.id == req.params.id_prod)
        
    if (index != -1) {
        cartSelected.productos.splice(index, 1)
        res.status(200).json({ msg: 'Product in cart deleted!', description: await carts.update(cartSelected, req.params.id)})
    }
    res.status(204).json({ msg: '', description: '' })
    
});

cartsRouter.get('*', async (request, response) => {
    response.status(404).send('404 - Page not found!!');
});

/* ---------------------- MODULOS EXPORTADOS ------------------------ */
export default cartsRouter;



// ===========================================================================================
/* ---------------------------- MODULOS ----------------------------- */
import { Router } from 'express';
import { config } from '../utils/config.js';
import { productsDao as prods } from '../daos/index.js';

/* -------------------------- INSTANCIAS  --------------------------- */
const prodsRouter = Router();

/* ------------------------ ADMIN ACCESS MW ------------------------- */
// const isAdmin = config.isAdmin;
const isAdmin = true;
function adminOnly( req, res, next ) {
    !isAdmin ? 
    res.status(403).json({ code: 403, msg: `Forbbiden Access`, data: { method: req.method, path: `${req.baseUrl}${req.url}` } }) :
    next();
}

/* ------------------------------ RUTAS ----------------------------- */
prodsRouter.get('/', async (req, res)=>{
    res.status(200).json({ products: await prods.getAll() });
});

prodsRouter.get('/:id', async (req, res)=>{
    res.status(200).json({ product: await prods.getById(req.params.id) });
});

prodsRouter.post('/', adminOnly ,async (req, res)=>{
    res.status(201).json({ msg: 'Product added!', id_new_product: await prods.save(req.body) });
});

prodsRouter.put('/:id', adminOnly , async (req, res)=>{
    res.status(200).json(await prods.update(req.body, req.params.id));
});

prodsRouter.delete('/:id', adminOnly , async (req, res)=>{
    res.status(200).json( await prods.deleteById(req.params.id) );
});

prodsRouter.get('*', async (request, response) => {
    response.status(404).send({ code: 404, msg: 'Page not found!!' });
});

/* ---------------------- MODULOS EXPORTADOS ------------------------ */
export default prodsRouter;