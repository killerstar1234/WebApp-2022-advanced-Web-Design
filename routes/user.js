const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { validateToken } = require('../JWT');



router.get('/quick', userController.quick);

router.get('/edit', userController.edit);

module.exports = router;
