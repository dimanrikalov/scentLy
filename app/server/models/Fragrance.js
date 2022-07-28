const mongoose = require('mongoose');

const fragranceSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [1, 'Enter a valid fragrance name!'],
        required: [true, 'Fragrance name is required!']
    },
    creator: {
        type: String
    },
    brand: {
        type: String,
        minLength: [2, 'Enter a valid fragrance brand!'],
        required: [true, 'Fragrance brand is required!']
    },
    topNotes: [
        {
            type: String,
            minLength: [2, 'Top notes minimum length is 2 characters!'],
            required: [true, 'Enter at least 1 top note for the fragrance'],
        },
    ],
    middleNotes: [
        {
            type: String,
            minLength: [2, 'Middle notes minimum length is 2 characters!'],
            required: [true, 'Enter at least 1 middle note for the fragrance'],
        },
    ],
    baseNotes: [
        {
            type: String,
            minLength: [2, 'Base notes minimum length is 2 characters!'],
            required: [true, 'Enter at least 1 base note for the fragrance'],
        },
    ],
    reviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Review',
        },
    ],
    rating: {
        type: Number,
        default: 0,
    },
    imageUrl: {
        type: String,
        validate: {
            validator: function () {
                return (
                    this.imageUrl.startsWith('http://') ||
                    this.imageUrl.startsWith('https://')
                );
            }, message: 'The image URL must be a valid link'
        },
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Fragrance = mongoose.model('Fragrance', fragranceSchema);

module.exports = Fragrance;
