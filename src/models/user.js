const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    FirstName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    LastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    DOB: {
        type: Date,
        required: true,
    },
    isMale: {
        type: Boolean,
    },
    salary: {
        type: Number,
    },
    CreationDate: {
        type: Date,
    },
    isActive: {
        type: Boolean,
    }
})

module.exports = User