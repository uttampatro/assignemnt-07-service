const Category = require('../entity/Category');

const createCategory = async ({ name }) => {
    const category = new Category({ name });
    await category.save();
    return category;
};

const fetchAllCategory = async () => {
    const category = await Category.find();
    return category;
};

const deleteCategory = async _id => {
    const category = await Category.findByIdAndDelete(_id);
    return category;
};

const updateCategory = async (_id, { name }) => {
    const category = await Category.findById(_id);

    category.name = name || category.name;
    await category.save();
    return category;
};

module.exports = {
    createCategory,
    fetchAllCategory,
    deleteCategory,
    updateCategory,
};
