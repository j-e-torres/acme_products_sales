import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ProductList from './ProductList';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Test</h1>
                    <Route exact path="/" component={ProductList} />
                </div>
            </HashRouter>
        )
    }
}

export default Main;

