const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        max: 255,
        min: 3,
    },
    description: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    image_url: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    cost: {
        type: Number,
        required: true,
    },
    discount: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    category_id: { type: Schema.Types.ObjectId, ref: 'category' },
});

module.exports = mongoose.model('item', itemSchema);
