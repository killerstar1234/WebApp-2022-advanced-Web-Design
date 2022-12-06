const express = require('express');
const router = express.Router();
const { validateToken, validateTeacherToken } = require('../JWT');

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
    res.render('add');
})

router.get('/error', validateToken, (req, res) => {
    res.render('error');
})

router.get('/checklist', validateToken, (req, res) => {
    res.render('checklist');
})


module.exports = router;