const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { validateUserInput } = require('../middlewares/UserMiddleware');

router.post('/signup', validateUserInput, UserController.createUser);
router.delete('/delete', validateUserInput, UserController.deleteUser);
router.put('/update', validateUserInput, UserController.updateUser);

module.exports = router;