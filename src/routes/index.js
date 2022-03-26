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
const {
    creatingOptionGroup,
    getAllOptionGroup,
    deletingOptionGroup,
    updatingOptionGroup,
} = require('../controllers/optionGroup');
const {
    creatingOptionItem,
    getAllOptionItem,
    deletingOptionItem,
    updatingOptionItem,
} = require('../controllers/optionItem');

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
router.put('/updateItem/:id', updatingItem);

//optionGroup
router.post('/createOptionGroup', creatingOptionGroup);
router.get('/fetchOptionGroup', getAllOptionGroup);
router.delete('/deleteOptionGroup/:id', deletingOptionGroup);
router.put('/updateOptionGroup/:id', updatingOptionGroup);

//optionItem
router.post('/createOptionItem', creatingOptionItem);
router.get('/fetchOptionItem', getAllOptionItem);
router.delete('/deleteOptionItem/:id', deletingOptionItem);
router.put('/updateOptionItem/:id', updatingOptionItem);

module.exports = router;
