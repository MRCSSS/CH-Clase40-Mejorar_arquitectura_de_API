// ===========================================================================================
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




siteOps.post ('/login',    passport.authenticate('local', { successRedirect: '/home', failureRedirect: '/login-error' }));
siteOps.post ('/register', upload.single('userImg'), postRegisterCtrlr);