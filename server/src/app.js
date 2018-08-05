const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
//  USE MORGAN (LOG GENERATOR)
app.use(morgan('combined'))
//  ALLOW EXPRESS APP TO EASILY PARSE JSON
app.use(bodyParser.json())
//  ALLOW ANY CLIENT TO ACCESS THIS WEBSITE
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered!`
  })
})

app.listen(process.env.PORT || 8081)
