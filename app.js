const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const path = require('path')
const Connect_MONGO = require('connect-mongo')
 
const app = express()


// Load config
dotenv.config({ path: './config/config.env' })

// Passport config
require('./config/passport')(passport)

// Start Database
connectDB()

// View Engine
app.set('view engine', 'pug')

// Sessions
app.use(session( {
    secret: 'Shut the fuck off',
    resave: false,
    saveUninitialized: false,
    store: new Connect_MONGO({
        collectionName: 'Sessions',
        ttl: 1 * 1 * 10 * 60,
        mongoUrl: process.env.MONGO_URI,
        touchAfter: 5 * 60
    })
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static contents
app.use(express.static(path.join(__dirname, 'static')))

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Routes
app.use('/', require('./routes/index'))
// app.use('/auth', require('./routes/auth'))

// Server Listening
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))