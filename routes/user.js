const express = require('express');
const { session } = require('passport');
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const router = express.Router();

router.get('/profile', ensureAuth,(req, res) => {
    res.render('dashboard/profile')
})

router.get('/signout', ensureAuth,(req, res, next) => {
    req.session.destroy()
    res.redirect('/signin')
})

module.exports = router