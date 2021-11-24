const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
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

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.CreationDate
    delete userObject.__v
    
    return userObject
}

const User = mongoose.model('User', userSchema)

module.exports = User