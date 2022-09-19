const mongoose = require('mongoose');

const PermissionSchema = mongoose.Schema({
    id: Number,
    name:{
        type: String,
        required: "Name must be provided",
        trim: true
    },
    status:{
        type: Boolean,
        default:true,
    }
},{ timestamps: true });

module.exports = mongoose.model('Permission', PermissionSchema);