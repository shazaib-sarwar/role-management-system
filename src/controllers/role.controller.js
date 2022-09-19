const Role = require("../models/role.model")


exports.createRole = async (req, res) => {
    try {
        const newRole = new Role({ ...req.body });
        console.log(newRole);
        const returnedRole = await newRole.save();
        res.status(200).json({ success: true, message:"Role created successfully." , data: returnedRole});

    } catch (err) {
        res.status(500).json({success: false, message: err.message, data: err.data});
     }
}


exports.findRoleByID = async (req, res) => {
    try {
        const returnedRole = await  Role.findById(req.params.id);
        res.status(200).json({ success: true, message:"Role found successfully." , data: returnedRole});

    }   catch (err) {
        res.status(500).json({ success: false, message: err.message, data: err.data});
    }
}


exports.findAllRole = async (req, res) => {
    try {
        const returnedRoles = await  Role.find();
        res.status(200).json({ success: true, message:"Role found successfully...." , data: returnedRoles});

    }   catch (err) {
        res.status(500).json({ success: false, message: err.message, data: err.data});
    }
}


exports.updateRole = async (req, res) => {
    try {

        const updateObj = {
            name: req.body.name
        };

        const _id = req.params.id;
        
        const returnedRole = await Role.findByIdAndUpdate(_id, { $set: updateObj }, { new: true });
        if(returnedRole) return res.status(200).json({success: true, message: "role updated successfully.", data: returnedRole});
        res.json({ success:false, message: "Failed to Update Role", data: null });

    }catch (err) { 
        res.status(500).json({ success:false, message: err.message, data: err.data });
    }
}

exports.deleteRole = async(req, res) =>{
    try {
        await Role.findByIdAndDelete(req.params.id);
        res.status(200).send({success:true, message: 'Role deleted successfully' , data: null});
    }catch (err) {
        res.status(500).send({success:false,message: err.message, data: err.data});
    }
}