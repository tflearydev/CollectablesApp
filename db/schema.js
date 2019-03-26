// go to your idea board on github and add
// in comments that you had at first

const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const SneakerSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  colorway: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: Date,
    required: false
  },
  condition: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: false
  }
})

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  sneakers: [SneakerSchema]
})

module.exports = {
  SneakerSchema: SneakerSchema,
  UserSchema: UserSchema
}
