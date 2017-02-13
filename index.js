// index.js

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const bodyParser = require('body-parser')

const routes = require('./includes/routes.js')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', (socket) => {
  console.log('A user connected.')
  socket.on('disconnect', () => {
    console.log('A user disconnected.')
  })
  socket.on('chat', (data) => {
    console.log(`<User> ${data}`)
  })
})

app
  .set('view engine', 'pug')
  .set('views', `${__dirname}/views`)
  .use('/static', express.static(`${__dirname}/static`))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(routes.web)
  .use('/api', routes.api)

server.listen(8080)
