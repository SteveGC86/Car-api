const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 3000

const authRouter = require('./auth/authRouter')
const carRouter = require('./cars/carRouter')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/cars', carRouter)

app.use((err, req, res, next) => {
  res.json({error: err.message})
})

app.listen(PORT, () => {
  console.info(`listening on port ${PORT}`)
})