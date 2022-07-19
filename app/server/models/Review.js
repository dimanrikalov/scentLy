const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Review content is required!'],
    },
    rating: {
        type: Number,
        min:[1, 'Minimum rating is 1.'],
        max:[5, 'Maximum rating is 5.'],
        required: [true, 'Enter a valid rating']
    },
    // author: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User',
    // }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;