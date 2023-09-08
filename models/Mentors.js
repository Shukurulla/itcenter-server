const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
    name: String,
    image: String,
    telegramUrl: String,
    instagramUrl: String,
    phoneNumber: Number,
    course: String
})

const Mentor = mongoose.model('Mentors', mentorSchema)
module.exports = Mentor