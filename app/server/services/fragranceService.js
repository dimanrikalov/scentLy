const Fragrance = require('../models/Fragrance');

exports.getAll = () => Fragrance.find();

exports.getAllThatHave = (string) =>
    Fragrance.find({
        $or: [
            { name: { $regex: string, $options: 'i' } },
            { brand: { $regex: string, $options: 'i' } },
        ],
    });

exports.getById = (fragranceId) => Fragrance.findOne({ _id: fragranceId });

exports.getByIdDetailed = (fragranceId) =>
    Fragrance.findOne({ _id: fragranceId }).populate('reviews');

exports.getByName = (fragranceName) =>
    Fragrance.findOne({ name: fragranceName });

exports.updateById = (fragranceId, data) =>
    Fragrance.findByIdAndUpdate(fragranceId, data);

exports.createOne = (item) => Fragrance.create({ ...item });

exports.deleteById = (fragranceId) => Fragrance.findByIdAndDelete(fragranceId);
