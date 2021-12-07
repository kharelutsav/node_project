const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc Login page
// @route GET /signin
router.post('/signin', passport.authenticate('local', {
    successRedirect: '/user_page',
    failureRedirect: '/signup',
    failureMessage: 'Incorrect Username/Password'
})
)

module.exports = router