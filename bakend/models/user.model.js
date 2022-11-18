const mongoose = require('mongoose')
const {isEmail} = requi('validator')

const userShema = new mongoose.Schema (
    {
        pseudo: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            validator: [isEmail],
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            max: 1024,
        }

    }
)