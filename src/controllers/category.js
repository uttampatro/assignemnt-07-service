const {
    createCategory,
    fetchAllCategory,
    deleteCategory,
    updateCategory,
} = require('../services/categoryService');

const creatingCategory = async (req, res) => {
    try {
        const name = req.body.name;
        const category = await createCategory({ name });
        return res.json(category);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const getAllCategory = async (req, res) => {
    try {
        const category = await fetchAllCategory();
        if (category) {
            return res.json(category);
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const deletingCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await deleteCategory({ _id: id });
        return res.json('delete category successfully');
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const updatingCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const category = await updateCategory({ _id: id }, { name });
        return res.json(category);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

module.exports = {
    creatingCategory,
    getAllCategory,
    deletingCategory,
    updatingCategory,
};
