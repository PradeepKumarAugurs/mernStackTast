const express = require('express');
let  router = express.Router();
const OutletController = require('../controllers/OutletController');

let initOutletRoutes = (app)=>{
    router.get('/', OutletController.getAllOutlets);
    router.get('/:id', OutletController.getOutletById);
    router.post('/', OutletController.createOutlet);
    router.patch('/:id', OutletController.updateOutlet);
    router.delete('/:id', OutletController.deleteOutlet);
    return app.use("/outlets/", router);
}
module.exports = initOutletRoutes;