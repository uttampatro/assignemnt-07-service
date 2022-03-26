const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionGroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    sequence: {
        type: Number,
        required: true,
        unique: true,
    },
    item_id: {
        type: Schema.Types.ObjectId,
        ref: 'item',
    },
    optionItems: [
        {
            type: Schema.Types.ObjectId,
            ref: 'optionItem',
        },
    ],
});

module.exports = mongoose.model('optionGroup', optionGroupSchema);
