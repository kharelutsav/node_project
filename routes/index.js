const express = require('express')
const { Login } = require('../data')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const bodyParser = require('body-parser')
const passport = require('passport')
router.use(bodyParser.urlencoded({ extended: true}))

// @desc Home/Landing page
// @route GET / or /home
router.get(['/', '/home'], ensureGuest, (req, res) => {
    res.render('home')
})

// @desc About page
// @route GET /about
router.get('/about', ensureGuest, (req, res) => {
    res.render('about')
})

// @desc Contact page
// @route GET /contacts
router.get('/contacts', ensureGuest, (req, res) => {
    const query = "Have any queries? Feel free to contact us."
    res.render('contacts', { heading: query })
})
router.post('/contacts', (req, res) => {
    const response = "Your query has been submitted succesfully. You shall be contacted any time soon."
    res.render('contacts', {heading: response});
})

// @desc Signup page
// @route GET /signup
router.get('/signup', ensureGuest, (req, res) => {
    res.render('signup')
})
router.post('/signup', async (req, res) => {
    await Login.create(req.body)
    .then(() => {
        res.status(200).render('signin')
    })
    .catch(() => {
        res.status(400).send("Unable to submit the form.")
    })
})

// @desc Login page
// @route GET /signin
router.get('/signin', ensureGuest, (req, res) => {
    let ren = false;
    res.render('signin', {remarks: ren})
})
router.post('/signin', passport.authenticate('local', {
        failureRedirect: '/signin',
        successRedirect: '/user/dashboard'
    })
)

// @desc Dashboard/Dash page
// @route GET /user/dashboard
router.get('/user/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard')
})


module.exports = router