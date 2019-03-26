// Supplying some seed data

require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Sneaker = require('../models/Sneaker')

const yeezy = new Sneaker({
  title: 'Adidas Yeezy Boost 700 (Inertia)',
  description: 'Sz 10, released 11/5/19, A condition',
  // brand: 'Adidas',
  // model: 'Yeezy Boost 700',
  // colorway: 'Inertia',
  // size: '10',
  // releaseDate: '3/5/19',
  // condition: 'A',
  // value: 'https://stockx.com/adidas-yeezy-boost-700-inertia'
})
const nike = new Sneaker({
  title: 'Adidas Yeezy Boost 700 (Inertia)',
  description: 'Sz 10, released 11/5/19, A condition',
  // brand: 'Nike',
  // model: 'Air Presto Off-White',
  // colorway: 'Black',
  // size: '10.5',
  // releaseDate: '11/5/19',
  // condition: 'A',
  // value: 'https://stockx.com/nike-air-presto-off-white-black-2018'
})
const tray = new User({
  userName: 'tfleary_kicks',
  password: 'greatthings',
  sneakers: [yeezy, nike]
  // firstName: 'Tray',
  // lastName: 'Fleary',
  // email: 'tflearydev@gmail.com',
  // sneakers: [yeezy, nike]
})

User.deleteMany({})
  .then(() => tray.save())
  .then(() => console.log('Saved to MongoDB'))
  .then(() => mongoose.connection.close())
