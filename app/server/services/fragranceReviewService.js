const Review = require('../models/Review');

exports.createReview = (data) => Review.create(data)

exports.updateReview = (reviewId, data) => Review.findByIdAndUpdate(reviewId, data);

exports.deleteReview = (reviewId) => Review.findByIdAndDelete(reviewId);

exports.getAllDetailed = () => Review.find().populate('fragrance').populate('author');