const express = require('express');
const roleController = require('../controllers/role.controller')

const router = express.Router();

//INDEX
router.get('/test', (req, res) => {
    res.send('Hello World!');
});

//STORE
router.
    post('/add', roleController.createRole);

//All Roles
router.
    get('/', roleController.findAllRole);


router
    .route('/:id')  
    .get(roleController.findRoleByID)       //SHOW ROLES BY ID
    .put(roleController.updateRole)         // Update ROLES BY ID
    .delete(roleController.deleteRole);     // Delete ROLES BY ID                                                                

module.exports = router;
