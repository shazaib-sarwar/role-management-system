const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "Email must be provided",
        trim: true
    },
    password: {
        type: String,
        required: 'Your password is required',
        max: 100
    },

    firstName: {
        type: String,
        required: 'First Name is required',
        max: 100
    },

    lastName: {
        type: String,
        required: 'Last Name is required',
        max: 100
    },

    phone: {
        type: String,
        required: 'Phone number is required',
        max: 15
    },
    profileImage: {
        type: String,
        required: false,
        max: 255
    },

    roleId: {
        type: mongoose.Types.ObjectId,
        ref: 'Role',
    },

    status: {
        type: Boolean,
        default: true
    }

}, { timestamps: true })

/*
userSchema.pre('save',  (next)=> {
    const user = this;
    console.log('user' , this)
    bcrypt.genSalt(10, function (err, salt) {
        console.log(salt)
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
        
    });
});
*/

userSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});
module.exports = mongoose.model('User', userSchema);