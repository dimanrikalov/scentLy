const Fragrance = require('../models/Fragrance');



exports.getAll = () => Fragrance.find();

exports.getById = (fragranceId) => Fragrance.findOne({_id: fragranceId});

exports.updateById= (fragranceId, data) => Fragrance.findByIdAndUpdate(fragranceId, data);

exports.createOne = (item) => Fragrance.create({...item});

exports.deleteById = (fragranceId) => Fragrance.findByIdAndDelete(fragranceId);