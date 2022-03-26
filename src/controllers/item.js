const {
    createItem,
    fetchAllItem,
    deleteItem,
    updateItem,
} = require('../services/itemService');

const creatingItem = async (req, res) => {
    try {
        const name = req.body.name;
        const description = req.body.description;
        const image_url = req.body.image_url;
        const cost = req.body.cost;
        const discount = req.body.discount;
        const category_id = req.body.category_id;
        const sequence = req.body.sequence;

        const item = await createItem({
            name,
            description,
            image_url,
            cost,
            discount,
            sequence,
            category_id,
        });
        return res.json(item);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const getAllItem = async (req, res) => {
    try {
        const itemList = await fetchAllItem();
        return res.json(itemList);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const deletingItem = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await deleteItem({ _id: id });
        return res.json('delete Item successfully');
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const updatingItem = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const description = req.body.description;
        const image_url = req.body.image_url;
        const cost = req.body.cost;
        const discount = req.body.discount;
        const sequence = req.body.sequence;

        const item = await updateItem(
            { _id: id },
            { name, description, image_url, cost, discount, sequence }
        );
        return res.json(item);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

module.exports = { creatingItem, getAllItem, deletingItem, updatingItem };
