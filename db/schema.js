// go to your idea board on github and add
// in comments that you had at first

const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const SneakerSchema = new Schema({
    name: {
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
        required: true,
    }
})

const UserSchema = new Schema({
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
        required: true,
    },
    sneakers: [SneakerSchema],
    })

module.exports = {
    IdeaSchema: SneakerSchema,
    UserSchema: UserSchema
}
