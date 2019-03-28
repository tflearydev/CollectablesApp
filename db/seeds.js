// Supplying some seed data

require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Sneaker = require('../models/Sneaker')

const yeezy = new Sneaker({
  title: 'Adidas Yeezy Boost 700 (Inertia)',
  description: 'Sz 10, released 3/5/19, A condition',
  image: 'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-700-Inertia/Images/Adidas-Yeezy-Boost-700-Inertia/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1551991286&w=1000',
  // brand: 'Adidas',
  // model: 'Yeezy Boost 700',
  // colorway: 'Inertia',
  // size: '10',
  // releaseDate: '3/5/19',
  // condition: 'A',
  value: 'https://stockx.com/adidas-yeezy-boost-700-inertia'
})
const prestoWhite = new Sneaker({
  title: 'Nike Air Presto Off-White (Black)',
  description: 'Sz 10.5, released 11/5/18, B+ condition',
  image: 'https://stockx-360.imgix.net/Nike-Air-Presto-Off-White-Black-2018/Images/Nike-Air-Presto-Off-White-Black-2018/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000',
  // brand: 'Nike',
  // model: 'Air Presto Off-White',
  // colorway: 'Black',
  // size: '10.5',
  // releaseDate: '11/5/19',
  // condition: 'A',
  value: 'https://stockx.com/nike-air-presto-off-white-black-2018'
})

const prestoBlack = new Sneaker({
  title: 'Nike Air Presto Off-White (White)',
  description: 'Sz 10, released 11/5/18, A condition',
  image: 'https://stockx-360.imgix.net/Nike-Air-Presto-Off-White-White-2018/Images/Nike-Air-Presto-Off-White-White-2018/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000',
  // brand: 'Nike',
  // model: 'Air Presto Off-White',
  // colorway: 'Black',
  // size: '10.5',
  // releaseDate: '11/5/19',
  // condition: 'A',
  value: 'https://stockx.com/nike-air-presto-off-white-white-2018'
})

const react = new Sneaker({
  title: 'Nike React Element 87 Sail Light (Bone)',
  description: 'Sz 9.5, released 9/4/18, A condition',
  image: 'https://stockx-360.imgix.net/Nike-React-Element-87-Sail-Light-Bone/Images/Nike-React-Element-87-Sail-Light-Bone/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000',
  // brand: 'Nike',
  // model: 'Air Presto Off-White',
  // colorway: 'Black',
  // size: '10.5',
  // releaseDate: '11/5/19',
  // condition: 'A',
  value: 'https://stockx.com/nike-react-element-87-sail-light-bone'
})

const tray = new User({
  userName: 'tfleary_kicks',
  password: 'greatthings',
  sneakers: [yeezy, prestoWhite, prestoBlack, react]
  // firstName: 'Tray',
  // lastName: 'Fleary',
  // email: 'tflearydev@gmail.com',
  // sneakers: [yeezy, nike]
})

User.deleteMany({})
  .then(() => tray.save())
  .then(() => console.log('Saved to MongoDB'))
  .then(() => mongoose.connection.close())
