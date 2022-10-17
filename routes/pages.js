const express = require('express');
const router = express.Router();
const { validateToken } = require('../JWT');

router.get('/', validateToken, (req, res) => {
    res.render('profile');
})

router.get('/profile', validateToken, (req, res) => {
    res.render('profile');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/settings', validateToken, (req, res) => {
    res.render('settings')
})

module.exports = router;