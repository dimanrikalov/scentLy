const User = require('../models/User'); 
const Review = require('../models/Review'); 
const Fragrance = require('../models/Fragrance'); 


//zashtoto se prepdpolaga che nqmame mnogo na broi danni inache estimatedDocumentCount()

exports.getStatistics = async () => {
    const userCount = await User.countDocuments();
    const fragranceCount = await Fragrance.countDocuments(); 
    const reviewsCount = await Review.countDocuments();

    return {
        userCount,
        fragranceCount,
        reviewsCount
    }
}