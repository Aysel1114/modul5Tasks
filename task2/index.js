const express = require("express");
const app = express();

let products = [
    { "id": 1, "name": "Cheese", "price": 4, "quantity": 20 },
    { "id": 2, "name": "Apple", "price": 2, "quantity": 15 },
    { "id": 3, "name": "Banana", "price": 3, "quantity": 50 },
    { "id": 4, "name": "Milk", "price": 4, "quantity": 35 },
    { "id": 5, "name": "Chicken", "price": 5, "quantity": 12 },
    { "id": 6, "name": "Potato", "price": 1, "quantity": 100 },
    { "id": 7, "name": "Tomato", "price": 1.5, "quantity": 45 },
    { "id": 8, "name": "Orange", "price": 4.6, "quantity": 78 },
    { "id": 9, "name": "Rice", "price": 2.8, "quantity": 30 },
    { "id": 10, "name": "Bread", "price": 5, "quantity": 4 }
];

app.get("/products/:id", function(req, res) {
    const product = products.find((product) => product.id === parseInt(req.params.id));
    if(product){
        res.json(product);
    }
    else {
        res.status(404).send("Product not found");
    }
})

app.get('/products', function (req, res) {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    if(count && offset) {
        res.send({ products: products.slice(offset, offset + count), count: products.length });
    }
    else {
        res.json(products);
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});