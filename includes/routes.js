// routes.js

const express = require('express')

module.exports = (() => {
  const web = express.Router()
  const api = express.Router()

  web.get('/', (req, res) => {
    res.render('index')
  })

  return {
    web,
    api
  }
})()
