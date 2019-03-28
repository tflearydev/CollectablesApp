const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const SneakerSchema = new Schema({
    title: {
        type: String,
        default: "Brand, Exact Model, and Color Here"
      },
      description: {
        type: String,
        default: "Size, Release Date, Shoe Condition Here"
      },
      image: {
          type: String,
          default: 'https://unixtitan.net/images/converse-clipart-shoe-jordan-3.png'
      },
       value: {
           type: String,
           default: 'Link to Buy or Sell Here'
      }

})

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
      type: String,
      required:true
  },
  sneakers: [SneakerSchema]
})

module.exports = {
  SneakerSchema: SneakerSchema,
  UserSchema: UserSchema
}
