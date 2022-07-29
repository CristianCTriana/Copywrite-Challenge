const express = require('express')

const routes = require('./routes/index.js')

const server = express()

server.use('/iecho', routes)// ruta inicial

module.exports = server
