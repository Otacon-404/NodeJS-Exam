const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    firstName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    isMale: {
        type: Boolean,
        default: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    CreationDate: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

module.exports = User