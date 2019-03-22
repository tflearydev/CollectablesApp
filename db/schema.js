// go to your idea board on github and add
// in comments that you had at first

const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const SneakerSchema = new Schema({
    title: {
        type: String,
        default: 'New Title'
    },
    description: {
        type: String,
        default: 'New Description'
    },
    created: {
        type: Date,
        default: new Date()
    }
})

const UserSchema = new Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    sneakers: [SneakerSchema],
})

module.exports = {
    IdeaSchema: SneakerSchema,
    UserSchema: UserSchema
}
