const Category = require('../entity/Category');
const Item = require('../entity/Item');

const createItem = async ({
    name,
    description,
    image_url,
    cost,
    discount,
    sequence,
    category_id,
}) => {
    const category = await Category.findOne({ _id: category_id });
    console.log(category);
    const item = new Item({
        name: name,
        description: description,
        image_url: image_url,
        cost: cost,
        discount: discount,
        sequence: sequence,
        category_id: category._id,
    });
    await item.save();
    category.items.push(item);
    await category.save();
    return item;
};

const fetchAllItem = async () => {
    const itemList = await Item.find();
    return itemList;
};

const deleteItem = async _id => {
    const item = await Item.findByIdAndDelete(_id);
    return item;
};

const updateItem = async (
    _id,
    { name, description, image_url, cost, discount, sequence }
) => {
    const item = await Item.findById(_id);

    item.name = name || item.name;
    item.description = description || item.description;
    item.image_url = image_url || item.image_url;
    item.cost = cost || item.cost;
    item.discount = discount || item.discount;
    item.sequence = sequence || item.sequence;
    await item.save();
    return item;
};

module.exports = { createItem, fetchAllItem, deleteItem, updateItem };
