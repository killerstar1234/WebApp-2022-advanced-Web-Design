const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')

router.get('/view', adminController.view)

router.get('/givePerms', adminController.givePerms)


module.exports = router;