// connecting mongoose and mongodb
// setting up mongoose connection

require('dotenv').config()
const mongoose = require('mongoose')

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect(
    'mongodb://localhost/SneakerCollect',
    { useNewUrlParser: true }
  )
}

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error: ', err)
  process.exit(-1)
})

mongoose.connection.once('open', () => {
  console.log('Mongoose has connected to MongoDB')
})

// export here so that I can export it elsewhere in the app
module.exports = mongoose
