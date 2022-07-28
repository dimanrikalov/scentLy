const Review = require('../models/Review');

exports.createReview = (data) => Review.create(data)

exports.deleteReview = (reviewId) => Review.findByIdAndDelete(reviewId);

exports.updateReview = (reviewId, data) => Review.findByIdAndUpdate(reviewId, data);

exports.getAllDetailed = () => Review.find().populate('fragrance').populate('author');