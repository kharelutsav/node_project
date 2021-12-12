const mongoose = require('mongoose')

const ip = '127.0.0.1:27017'
const database = 'tests'

module.exports = mongoose.connect(`mongodb://${ip}/${database}`).then(console.log('Connected to the server.'))