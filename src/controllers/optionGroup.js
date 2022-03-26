const {
    createOptionGroup,
    fetchAllOptionGroup,
    deleteOptionGroup,
    updateOptionGroup,
} = require('../services/optionGroupService');

const creatingOptionGroup = async (req, res) => {
    try {
        const name = req.body.name;
        const item_id = req.body.item_id;
        const sequence = req.body.sequence;

        const optionGroup = await createOptionGroup({
            name,
            sequence,
            item_id,
        });
        return res.json(optionGroup);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const getAllOptionGroup = async (req, res) => {
    try {
        const optionGroupList = await fetchAllOptionGroup();
        return res.json(optionGroupList);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const deletingOptionGroup = async (req, res) => {
    try {
        const id = req.params.id;
        const optionGroup = await deleteOptionGroup({ _id: id });
        return res.json('delete Item successfully');
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const updatingOptionGroup = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const sequence = req.body.sequence;

        const optionGroup = await updateOptionGroup(
            { _id: id },
            { name, sequence }
        );
        return res.json(optionGroup);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

module.exports = {
    creatingOptionGroup,
    getAllOptionGroup,
    deletingOptionGroup,
    updatingOptionGroup,
};
