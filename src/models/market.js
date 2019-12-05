'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    Address: [{
        street: {
            type: String,
            require: true
        },
        number: {
            type: Number,
            require: true
        },
        district: {
            type: String,
            require: true
        }
    }],
    geolocation: [{
        latitude: {
            type: String,
            require: true
        },
        longitude: {
            type: String,
            require: true
        }
    }],
    image: {
        type: String
    },
    product_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

module.exports = mongoose.model('Market', schema);
