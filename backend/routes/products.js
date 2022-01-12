const express = require('express');
let  router = express.Router();
const ProductController = require('../controllers/ProductController');

let initProductRoutes = (app)=>{
    router.get('/', ProductController.getAllProducts);
    router.get('/:id', ProductController.getProductById);
    router.post('/', ProductController.createProduct);
    router.patch('/:id', ProductController.updateProduct);
    router.delete('/:id', ProductController.deleteProduct);
    return app.use("/products/", router);
}
module.exports = initProductRoutes;