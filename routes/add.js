const express = require('express');
const router = express.Router();
const addController = require('../controllers/add')

router.post('/login', addController.login)

router.post('/subject', addController.subject);

module.exports = router;