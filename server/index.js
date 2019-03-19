const express = require('express');
const app = express();
const path = require('path');
const { Product } = require('./db')

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client/index.html'))
})

app.get('/api/products', (req, res, next) => {
    Product.findAll()
        .then((data) => res.send(data))
        .catch(next);
})

app.post('/api/products', (req, res, next) => {
    Product.create(req.body)
        .then(product => res.send(product))
        .catch(next)
})

app.delete('/api/products/:id', (req, res, next) => {
    Product.destroy({
        where: { id: req.params.id}
    })
        .then(() => res.sendStatus(204))
        .catch(next);
})

//error handling
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})
module.exports = app;
