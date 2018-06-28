const express = require('express')
const router = express.Router()
const auth = require('./util')
const {authenticate} = require('./authMiddleWare')
const JWT = require('jsonwebtoken')

router.post('/login', authenticate, (req, res) => {

  console.log("LOGIN post")

  const payload = {
    bond: '007',
    ip: req.connection.remoteAddress
  }

  const jwtSecret = process.env.JWT_SECRET

  JWT.sign(payload, jwtSecret, (err, token) => {

    if(err) {
      res.status(401)
      throw new Error('Bad token')
    }
    
    res.set('AuthorXXXXXization', `Bearer ${token}`)
    console.log(res)
    res.status(200).json(token)
    
  })

})

module.exports = router