const express = require('express');
const {
    creatingCategory,
    getAllCategory,
    deletingCategory,
    updatingCategory,
} = require('../controllers/category');
const {
    creatingItem,
    getAllItem,
    deletingItem,
    updatingItem,
} = require('../controllers/item');

const router = express.Router();

//category
router.post('/createCategory', creatingCategory);
router.get('/fetchAllCategory', getAllCategory);
router.delete('/deleteCategory/:id', deletingCategory);
router.put('/updateCategory/:id', updatingCategory);

//item
router.post('/createItem', creatingItem);
router.get('/fetchAllItem', getAllItem);
router.delete('/deleteItem/:id', deletingItem);
router.put('/updateItem/:id', updatingItem)

module.exports = router;
