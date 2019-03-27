const express = require('express')
const User = require('../models/User.js')
const Sneaker = require('../models/Sneaker.js')
const router = express.Router()

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  const newUser = new User(req.body.user)
  newUser
    .save()
    .then((user) => {
      res.json(user)
    })
    .catch((err) => console.log(err))
})

// /api/users/:userId
router.get('/:userId', (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      user.sneakers = user.sneakers.reverse()
      res.json(user)
    })
    .catch((err) => console.log(err))
})

router.delete("/:userId", (req, res) => {
    User.findByIdAndRemove(req.params.userId).then(user => {
      user.save()
        res.json('200 status');  
    });
  });

router.post('/:userId/sneakers', (req, res) => {
  User.findById(req.params.userId).then(user => {
    const newSneaker = new Sneaker({})
    user.sneakers.push(newSneaker)

    user.save().then((user) => {
      res.json(newSneaker)
    })
  })
})

router.delete('/:userId/sneakers/:sneakerId', (req, res) => {
  User.findById(req.params.userId).then(user => {
    const filteredSneakers = user.sneakers.filter(
      sneaker => sneaker._id.toString() !== req.params.sneakerId
    )

    user.sneakers = filteredSneakers

    user.save().then(user => {
      user.sneakers = user.sneakers.reverse()
      res.json(user.sneakers)
    })
  })
})

router.patch('/:userId/sneakers/:sneakerId', (req, res) => {
  User.findById(req.params.userId).then(user => {
    const update = req.body.sneaker
    const sneaker = user.sneakers.id(req.params.sneakerId)
    if (update.title) {
      sneaker.title = update.title
    }
    if (update.description) {
      sneaker.description = update.description
    }

    user.save().then((user) => {
      user.sneakers = user.sneakers.reverse()
      res.json(user)
    })
  })
})

module.exports = router
