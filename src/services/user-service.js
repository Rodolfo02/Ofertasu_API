'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.autenticate = async (data) => {
    const res = await User.findOne({
        email: data.email,
        password: data.password
    });

    return res;
}

exports.get = async () => {
    const res = await User.find();
    return res;
}

exports.getById = async (id) => {
    const res = await User.findById(id);
    return res;
}

exports.create = async(data) => {
    var user = new User(data);
    await user.save();
}

exports.update = async(id, data) => {
    await user.findByIdAndUpdate(id, {
        $set: {
            FirstName: data.FirstName,
            LastName: data.LastName,
            email: data.email,
            password: data.password
        }
    });
}

exports.delete = async(id) => {
    await User.findByIdAndDelete(id);
}