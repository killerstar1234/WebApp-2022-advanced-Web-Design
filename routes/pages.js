const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('profile');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/settings', (req, res) => {
    res.send('<h1>Working On Settings</h1>')
})

module.exports = router;