const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Review content is required!'],
    },
    rating: {
        type: Number,
        min:[0, 'Minimum rating is 0.'],
        max:[5, 'Maximum rating is 5.'],
        required: [true, 'Enter a valid rating']
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;