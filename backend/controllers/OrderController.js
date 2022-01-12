const db = require('../models');
const Order = db.Order;
const Outlet = db.Outlet;
const User = db.User;
const Product = db.Product;

const getAllOrders = async (req, res) => {
    try {
        const results = await Order.findAll({
            include:[User,Outlet,Product]
        });
        res.json(results);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

const getOrderById = async (req, res) => {
    try {
        const result = await Order.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(result[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

const createOrder = async (req, res) => {
    const request = await req.body;
    try {
        await Order.create(req.body);
        res.json({
            "message": "Order Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

const updateOrder = async (req, res) => {
    try{
        await Order.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Outlet Updated"
        });
    }catch(error){
        res.json({ message: error.message });
    }
}

const deleteOrder = async (req, res) => {
    try{
        await Order.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Order Deleted"
        });
    }catch(error){
        res.json({ message: error.message });
    }  
}
module.exports = {
    getAllOrders,getOrderById,createOrder,updateOrder,deleteOrder
} 