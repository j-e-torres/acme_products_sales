const express = require('express');
const app = express();
const path = require('path');
const { Product } = require('./db')

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client/index.html'))
})

app.get('/api/products', (req, res, next) => {
    Product.findAll()
        .then((data) => res.send(data))
        .catch(next);
})

module.exports = app;
