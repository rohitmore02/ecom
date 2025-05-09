const express = require('express');

const app = express();
const PORT = 5000;

app.route('/products')
.get((req, res) => {
    res.send("This is get products API");
})

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));