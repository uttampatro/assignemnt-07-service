const Item = require('../entity/Item');
const OptionGroup = require('../entity/OptionGroup');

const createOptionGroup = async ({ name, sequence, item_id }) => {
    const item = await Item.findById({ _id: item_id });
    const optionGroup = new OptionGroup({
        name,
        sequence,
        item_id: item._id,
    });
    await optionGroup.save();
    item.optionGroups.push(optionGroup);
    await item.save();
    return optionGroup;
};

const fetchAllOptionGroup = async sequence => {
    const optionGroup = await OptionGroup.find().sort({ sequence });
    return optionGroup;
};

const deleteOptionGroup = async _id => {
    const optionGroup = await OptionGroup.findByIdAndDelete(_id);
    return optionGroup;
};

const updateOptionGroup = async (_id, { name, sequence }) => {
    const optionGroup = await OptionGroup.findById(_id);

    optionGroup.name = name || optionGroup.name;
    optionGroup.sequence = sequence || optionGroup.sequence;
    await optionGroup.save();
    return optionGroup;
};
module.exports = {
    createOptionGroup,
    fetchAllOptionGroup,
    deleteOptionGroup,
    updateOptionGroup,
};
