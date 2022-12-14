const express = require('express');
const router = express.Router();
const { validateToken, validateTeacherToken } = require('../JWT');
const path = require('path');

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

router.get('/quick', validateToken, (req, res) => {
    res.render('quick');
})

router.get('/add', validateTeacherToken, (req, res) => {
    return res.sendFile(path.join(__dirname, '../views/add.html'));
})

router.get('/error', validateToken, (req, res) => {
    res.render('error');
})

router.get('/checklist', validateToken, (req, res) => {
    res.render('checklist');
})


module.exports = router;