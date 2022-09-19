const express = require('express');
const permissionController = require('../controllers/permission.controller')

const router = express.Router();

//Test
router
.route('/test')
.get((req, res) => {
    res.send('Hello World!');
});

//Get all Per
router.
    get('/', permissionController.findAllPermissions);


//Add Permissions
router.
    post('/add', permissionController.createPermission);


router
    .route('/:id')  
    .get(permissionController.findPermissionByID)       //SHOW Permission BY ID
    .put(permissionController.updatePermission)         // Update Permission BY ID
    .delete(permissionController.deletePermission);     // Delete Permission BY ID                                                                

module.exports = router;
