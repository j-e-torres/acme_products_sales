import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import axios from 'axios';

import List from './list';
import Navbar from './Navbar';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
        this.deleteProduct = this.deleteProduct.bind(this)

    }

    loadData () {
        axios.get('/api/products')
            .then( res => res.data)
            .then( p => this.setState({ products: p }))
    }

    deleteProduct(id) {
        axios.delete(`/api/products/${id}`)
            .then( () => this.loadData())
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        const { products } = this.state;
        const productSales = products.filter( product => product.discountPercent > 0);

        const counts = {
            '/products': products.length,
            '/products/sales': productSales.length
        }

        return (
            <HashRouter>
                <h1>Acme Products/Sales</h1>
                <Route render={ ({ location }) => <Navbar counts={counts} location={location} />} />
                <Route exact path="/" render={() => <h2>Welcome!!</h2>} />
                <Route exact path="/products" render={() => <List products={products} deleteProduct={this.deleteProduct} />} />
                <Route exact path="/products/sales/" render={() => <List products={productSales} deleteProduct={this.deleteProduct} />} />

            </HashRouter>
        )
    }
}

export default Main;

