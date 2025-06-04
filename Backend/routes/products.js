const express = require('express');
const { getProducts } = require('../controllers/products');
const router = express.Router();

router.get('/all', getProducts);

module.exports = router;