const express = require('express');
let  router = express.Router();
const UserController = require('../controllers/UserController');

let initUserRoutes = (app)=>{
    router.get('/', UserController.getAllUsers);
    router.get('/:id', UserController.getUserById);
    router.post('/', UserController.createUser);
    router.patch('/:id', UserController.updateUser);
    router.delete('/:id', UserController.deleteUser);
    return app.use("/users/", router);
}
module.exports = initUserRoutes;