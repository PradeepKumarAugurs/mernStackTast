const db = require('../models');
const Outlet = db.Outlet;
// const User = db.User;
// const Product = db.Product;

const getAllOutlets = async (req, res) => {
    try {
        const results = await Outlet.findAll({});
        res.json(results);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

const getOutletById = async (req, res) => {
    try {
        const result = await Outlet.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(result[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

const createOutlet = async (req, res) => {
    const request = await req.body;
    try {
        await Outlet.create(req.body);
        res.json({
            "message": "Outlet Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

const updateOutlet = async (req, res) => {
    try{
        await Outlet.update(req.body, {
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

const deleteOutlet = async (req, res) => {
    try{
        await Outlet.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Outlet Deleted"
        });
    }catch(error){
        res.json({ message: error.message });
    }  
}
module.exports = {
    getAllOutlets,getOutletById,createOutlet,updateOutlet,deleteOutlet
} 