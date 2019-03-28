// go to your idea board on github and add
// in comments that you had at first

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
//   brand: {
//     type: String,
//     required: true
//   },
//   model: {
//     type: String,
//     required: true
//   },
//   colorway: {
//     type: String,
//     required: true
//   },
//   size: {
//     type: Number,
//     required: true
//   },
//   releaseDate: {
//     type: Date,
//     required: false
//   },
//   condition: {
//     type: String,
//     required: true
//   },
//   value: {
//     type: String,
//     required: false
//   }
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
//   firstName: {
//     type: String,
//     required: true
//   },
//   lastName: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
  sneakers: [SneakerSchema]
})

module.exports = {
  SneakerSchema: SneakerSchema,
  UserSchema: UserSchema
}
