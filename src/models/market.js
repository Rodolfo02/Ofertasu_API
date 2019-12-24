'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    street: {
            type: String,
            require: true
    },
    num: {
        type: Number,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    latitude: {
        type: Number,
        require: true
    },
    longitude: {
        type: Number,
        require: true
    },
    image: {
        type: String
    },
});

module.exports = mongoose.model('Market', schema);
