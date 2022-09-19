const express = require('express');
const router = express.Router();


const userRoutes = require('./user.route');
const roleRoutes = require('./role.route');
const permissionRoutes = require('./permissions.route');


router.use('/user', userRoutes);
router.use('/role', roleRoutes);
router.use('/permission', permissionRoutes);

module.exports = router;