const User = require("../models/user.model")


exports.createUser = async (req, res) => {
    try {
        const newUser = new User({ ...req.body });

        console.log(newUser);
        const returnedUser = await newUser.save();
        if (returnedUser) return res.status(200).json({ success: true, message:"User created successfully." , data: returnedUser});
        res.status(500).json({ success: false, message:"Failed to Create." , data: returnedUser});
    } catch (err) {
        res.status(500).json({success: false, message: err.message, data: err.data});
     }
}


exports.findUserByID = async (req, res) => {
    try {
        const returnedUser = await  User.findById(req.params.id);
        res.status(200).json({ success: true, message:"User found successfully." , data: returnedUser});

    }   catch (err) {
        res.status(500).json({ success: false, message: err.message, data: err.data});
    }
}


exports.findAllUser = async (req, res) => {
    try {
        const returnedUsers = await  User.find();
        res.status(200).json({ success: true, message:"User found successfully...." , data: returnedUsers});

    }   catch (err) {
        res.status(500).json({ success: false, message: err.message, data: err.data});
    }
}


exports.updateUser = async (req, res) => {
    try {

        const updateObj = {
            permissionIds: req.body.permissionIds,
            name: req.body.name
        };
        const _id = req.params.id;
        const returnedUser = await User.findByIdAndUpdate(_id, { $set: updateObj }, { new: true });
        
        res.status(200).json({success: true, message: "user updated successfully.", data: returnedUser});

    }catch (err) { 
        res.status(500).send({ success:false, message: err.message, data: err.data });
    }
}

exports.deleteUser = async(req, res) =>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send({success:true, message: 'User deleted successfully' , data: null});
    }catch (err) {
        res.status(500).send({success:false,message: err.message, data: err.data});
    }
}