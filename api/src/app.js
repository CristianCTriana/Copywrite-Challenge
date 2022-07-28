const express = require('express')

const routes = require('./routes/index.js')

const server = express()

server.use('/iecho', routes)

module.exports = server
