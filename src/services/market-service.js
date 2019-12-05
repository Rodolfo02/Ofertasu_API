'use strict';

const mongoose = require('mongoose');
const Market = mongoose.model('Market');

exports.get = async () => {
    const res = await Market.find();
    return res;
}

exports.getById = async (id) => {
    const res = await Market.findById(id).populate('product_id');
    return res;
}

exports.create = async(data) => {
    var market = new Market(data);
    await market.save();
}

exports.update = async(id, data) => {
    await Market.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            adreess: data.adreess,
            latitude: data.latitude,
            longitude: data.longitude
        }
    });
}

exports.delete = async(id) => {
    await Market.findByIdAndDelete(id);
}