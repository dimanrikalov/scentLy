const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    fragrance: {
        type: mongoose.Types.ObjectId,
        ref: 'Fragrance',
        required: true
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
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;