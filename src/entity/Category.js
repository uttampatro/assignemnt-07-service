const mongoose = require('mongoose');
const Item = require('./Item');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: 'item',
        },
    ],
});

module.exports = mongoose.model('category', categorySchema);
