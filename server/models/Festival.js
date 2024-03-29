const mongoose = require('mongoose')

const festivalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: {
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    musicTags: [{
        type: mongoose.Types.ObjectId,
        ref: 'MusicGenre'
    }],
    views: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        default:'default2.jpg'
    }
})

module.exports = mongoose.model('Festival',festivalSchema)