const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    fragrance: {
        type: mongoose.Types.ObjectId,
        ref: 'Fragrance',
        required: true
    },
    fragranceName: {
        type: String,
        required: [true, 'Fragrance name is required!']
    },
    fragranceBrand: {
        type: String,
        required: [true, 'Fragrance brand is required!']
    },
    description: {
        type: String,
        required: [true, 'Review description is required!'],
    },
    rating: {
        type: Number,
        min:[1, 'Minimum rating is 1.'],
        max:[5, 'Maximum rating is 5.'],
        required: [true, 'Enter a valid rating'],
        validate: {
                validator: function () {
                    return Number.isInteger(this.rating);
                },
                message: 'Rating must be an integer value'
            }
        },
    imageUrl: {
        type: String,
        required: [true, 'Fragrance image is required!']
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;