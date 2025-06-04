const db = require('../config/db');

const getProducts = async (req, res) => {
    try {
        const data = await db.query('SELECT * FROM products');
        if (!data) {
            res.status(204).send({
                success: false,
                message: 'No records found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'All products',
            totalProducts: data[0].length,
            data: data[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get All Products API',
            error
        });
    }
};

module.exports = { getProducts };