const Category = require('../entity/Category');

const createCategory = async ({ name, sequence }) => {
    const category = new Category({ name, sequence });
    await category.save();
    return category;
};

const fetchAllCategory = async sequence => {
    const category = await Category.find().sort({ sequence });
    return category;
};

const deleteCategory = async _id => {
    const category = await Category.findByIdAndDelete(_id);
    return category;
};

const updateCategory = async (_id, { name, sequence }) => {
    const category = await Category.findById(_id);

    category.name = name || category.name;
    category.sequence = sequence || category.sequence;
    await category.save();
    return category;
};

module.exports = {
    createCategory,
    fetchAllCategory,
    deleteCategory,
    updateCategory,
};
