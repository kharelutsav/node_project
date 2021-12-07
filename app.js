const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')
 
const app = express()


//load config
dotenv.config({ path: './config/config.env' })

//Start Database
connectDB()

//View Engine
app.set('view engine', 'pug')

//Static contents
app.use(express.static('static'))

//logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Routes
app.use('/', require('./routes/index'))

//Server Listening
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))