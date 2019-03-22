const express = require('express')
const User = require('../models/User.js')
// const Sneaker = require('../models/Sneaker.js')
const router = express.Router()

router.get('/', (req, res) => {
    User
    .find()
    .then(users => {
        res.json(users)
    })
    .catch(err => console.log(err))
})

module.exports = router