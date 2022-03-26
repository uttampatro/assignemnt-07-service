const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionItemSchema = new Schema({
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
    option_group_id: {
        type: Schema.Types.ObjectId,
        ref: 'optionGroup',
    },
});

module.exports = mongoose.model('optionItem', optionItemSchema);
