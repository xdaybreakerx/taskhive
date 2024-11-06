const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { validateUserAuth } = require('../functions/jwtFunctions');

router.post('/signup', userController.userSignUp);
router.get('/login', validateUserAuth, userController.userLogin)

module.exports = router;
