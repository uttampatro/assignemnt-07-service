const {
    createOptionItem,
    fetchAllOptionItem,
    deleteOptionItem,
    updateOptionItem,
} = require('../services/optionItemService');

const creatingOptionItem = async (req, res) => {
    try {
        const name = req.body.name;
        const option_group_id = req.body.option_group_id;
        const sequence = req.body.sequence;

        const optionItem = await createOptionItem({
            name,
            sequence,
            option_group_id,
        });
        return res.json(optionItem);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const getAllOptionItem = async (req, res) => {
    try {
        const optionItemList = await fetchAllOptionItem();
        return res.json(optionItemList);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const deletingOptionItem = async (req, res) => {
    try {
        const id = req.params.id;
        const optionItem = await deleteOptionItem({ _id: id });
        return res.json('delete Item successfully');
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const updatingOptionItem = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const sequence = req.body.sequence;

        const optionItem = await updateOptionItem(
            { _id: id },
            { name, sequence }
        );
        return res.json(optionItem);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

module.exports = {
    creatingOptionItem,
    getAllOptionItem,
    deletingOptionItem,
    updatingOptionItem,
};
