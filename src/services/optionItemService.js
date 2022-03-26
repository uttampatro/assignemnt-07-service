const OptionGroup = require('../entity/OptionGroup');
const OptionItem = require('../entity/OptionItem');

const createOptionItem = async ({ name, sequence, option_group_id }) => {
    const optionGroupData = await OptionGroup.findById({
        _id: option_group_id,
    });
    const optionItem = new OptionItem({
        name,
        sequence,
        option_group_id: optionGroupData._id,
    });
    await optionItem.save();
    optionGroupData.optionItems.push(optionItem);
    await optionGroupData.save();
    return optionItem;
};

const fetchAllOptionItem = async sequence => {
    const optionItem = await OptionItem.find().sort({ sequence });
    return optionItem;
};

const deleteOptionItem = async _id => {
    const optionItem = await OptionItem.findByIdAndDelete(_id);
    return optionItem;
};

const updateOptionItem = async (_id, { name, sequence }) => {
    const optionItem = await OptionItem.findById(_id);

    optionItem.name = name || optionItem.name;
    optionItem.sequence = sequence || optionItem.sequence;
    await optionItem.save();
    return optionItem;
};
module.exports = {
    createOptionItem,
    fetchAllOptionItem,
    deleteOptionItem,
    updateOptionItem,
};
