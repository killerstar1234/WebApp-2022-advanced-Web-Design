const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')

router.get('/view', adminController.view)


module.exports = router;