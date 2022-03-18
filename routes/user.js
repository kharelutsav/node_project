const express = require('express');
const { Cookie } = require('express-session');
const { session } = require('passport');
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const router = express.Router();

router.get('/profile', ensureAuth, (req, res) => {
    res.render('dashboard/profile')
})

router.get('/settings', ensureAuth, (req, res) => {
    res.render('dashboard/settings')
})

router.get('/signout', ensureAuth, (req, res) => {
    req.session.destroy((err) => {
        res.clearCookie('connect.sid')
        res.redirect('/signin')
    });
})

module.exports = router