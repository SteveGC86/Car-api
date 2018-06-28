const express = require('express')
const router = express.Router()
const {authorize} = require('../auth/authMiddleware')

router.get('/', authorize, (req, res) => {

  console.log("CARS get")

  const cars = [
    {
      id: 1,
      model: 'Toyota',
      color: 'Red'
    },
    {
      id: 2,
      model: 'Holden',
      color: 'Green'
    },
    {
      id: 3,
      model: 'Mazda',
      color: 'Purple'
    }
  ]


  res.status(200).json(cars)
})

module.exports = router
