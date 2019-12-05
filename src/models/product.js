'use strict';

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const schema = new Schema({
    market_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Market'
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    image: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Product', schema);
