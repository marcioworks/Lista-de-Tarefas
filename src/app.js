const express = require('express')
const cors = require('cors')

class App{
  constructor(){
    this.server = express()
    this.middlewares()

  }

  middlewares(){
    this.server.use(cors())
    this.server.use(express.json())
  }
}

module.exports = new App().server