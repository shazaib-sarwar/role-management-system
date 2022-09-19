const express = require('express');
const userController = require('../controllers/user.controller')

const router = express.Router();

//INDEX
router.get('/test', (req, res) => {
    res.send('Hello World!');
});

//STORE
router.
    post('/add', userController.createUser);

//All Users
router.
    get('/', userController.findAllUser);


router
    .route('/:id')  
    .get(userController.findUserByID)       //SHOW ROLES BY ID
    .put(userController.updateUser)         // Update ROLES BY ID
    .delete(userController.deleteUser);     // Delete ROLES BY ID                                                                

module.exports = router;
