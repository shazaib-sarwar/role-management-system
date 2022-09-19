const mongoose = require('mongoose');
const Permission = require("../models/permissions.model")


exports.createPermission = async (req, res) => {
    try {
        const newPermission = new Permission({ ...req.body });
        console.log(newPermission);
        const returnedPermission = await newPermission.save();
        res.status(200).json({ success: true, message:"Permission created successfully." , data: returnedPermission});

    } catch (err) {
        res.status(500).json({success: false, message: err.message, data: err.data});
     }
}


exports.findPermissionByID = async (req, res) => {
    try {
        const returnedPermission = await  Permission.findById(req.params.id);
        res.status(200).json({ success: true, message:"Permission found successfully." , data: returnedPermission});

    }   catch (err) {
        res.status(500).json({ success: false, message: err.message, data: err.data});
    }
}
exports.findAllPermissions = async (req, res) => {
    try {
        const returnedPermission = await  Permission.find();
        res.status(200).json({ success: true, message:"Permissions found successfully." , data: returnedPermission});

    }   catch (err) {
        res.status(500).json({ success: false, message: err.message, data: err.data});
    }
}


exports.updatePermission = async (req, res) => {
    try {
        const updateObj = {
            name: req.body.name,
            // status: req.body.status
        };

        const _id = req.params.id;
        const returnedPermission = await Permission.findByIdAndUpdate(_id, { $set: updateObj }, { new: true });
        
        res.status(200).json({success: true, message: "permission updated successfully.", data: returnedPermission});

    }catch (err) { 
        res.status(500).send({ success:false, message: err.message, data: err });
    }
}

exports.deletePermission = async(req, res) =>{
    try {
        await Permission.findByIdAndDelete(req.params.id);
        res.status(200).send({success:true, message: 'Permission deleted successfully' , data: null});
    }catch (err) {
        res.status(500).send({success:false,message: err.message, data: err.data});
    }
}