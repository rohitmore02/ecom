const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

dotenv.config();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extends: true}));
app.use(cors());

app.use('/api/v1/products', require('./routes/products'));

mySqlPool.query('SELECT 1').then(() => {
    console.log('Database connected successfully...!');
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
}).catch((error) => {
    console.log(error);
});