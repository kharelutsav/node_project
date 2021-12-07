const express = require('express')
const { Login } = require('../data')
const router = express.Router()

const bodyParser = require('body-parser')
const passport = require('passport')
router.use(bodyParser.urlencoded({ extended: true}))

// @desc Home/Landing page
// @route GET / or /home
router.get(['/', '/home'], (req, res) => {
    res.render('home')
})

// @desc About page
// @route GET /about
router.get('/about', (req, res) => {
    res.render('about')
})

// @desc Contact page
// @route GET /contacts
router.get('/contacts', (req, res) => {
    const query = "Have any queries? Feel free to contact us."
    res.render('contacts', { heading: query })
})
router.post('/contacts', (req, res) => {
    const response = "Your query has been submitted succesfully. You shall be contacted any time soon."
    res.render('contacts', {heading: response});
})

// @desc Signup page
// @route GET /signup
router.get('/signup', (req, res) => {
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
router.get('/signin', (req, res) => {
    let ren = false;
    res.render('signin', {remarks: ren})
})
router.post('/signin', passport.authenticate('local', {
        failureRedirect: '/signin'
    }), (req, res) => {
        res.render('user_page')
    }
)

// @desc Dashboard/Dash page
// @route GET /dashboard
router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})


module.exports = router