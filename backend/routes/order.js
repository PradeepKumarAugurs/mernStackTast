const express = require('express');
let  router = express.Router();
const OrderController = require('../controllers/OrderController');

let initOrderRoutes = (app)=>{
    router.get('/', OrderController.getAllOrders);
    router.get('/:id', OrderController.getOrderById);
    router.post('/', OrderController.createOrder);
    router.patch('/:id', OrderController.updateOrder);
    router.delete('/:id', OrderController.deleteOrder);
    return app.use("/orders/", router);
}
module.exports = initOrderRoutes;