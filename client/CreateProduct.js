import React, { Component } from 'react';
import axios from 'axios';

class CreateProduct extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            discountPercent: 0,
            availability: '',
            err: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange ({ target }){
        this.setState({[target.name]: target.value})
    }

    onSubmit (e) {
        e.preventDefault();
        const { push } = this.props.history

        axios.post('/api/products', this.state)
            .then((response) => response.data)
            .then((product => {
                this.props.addProduct(product)
                return product
            }))
            .then((product) => {
                product.discountPercent ? push('/products/sales') : push('/products')
            })
            .catch(err => {
                console.log('here is err', err)
                this.setState({ err: 'Your discount or availability is wrong' })
            });

    }

    render() {
        const { err, name, price, availability } = this.state;
        const { handleChange, onSubmit } = this
        const isEnabled = name.length > 0 && price > 0 && availability.length > 0;

        return (
        <form onSubmit={onSubmit}>
        {
            err && (
                <div className="alert alert-warning">{ err }</div>
                )
        }
          <label htmlFor="name"> Name </label>
          <input className="form-control" name="name" type="text"  onChange={handleChange} />

          <label htmlFor="price"> Price </label>
          <input className="form-control" name="price" type="text" onChange={handleChange} />

          <label htmlFor="discountPercent"> Discount Percentage </label>
          <input className="form-control" name="discountPercent" type="text" onChange={handleChange} />

          <label htmlFor="availability"> Availability </label>
          {/* <input className="form-control" name="availability" type="text" onChange={handleChange} /> */}

            <select className="form-control" name="availability" type="text" onChange={handleChange}>
                <option>instock</option>
                <option>discontinued</option>
                <option>backordered</option>
            </select>
          <button disabled={!isEnabled} type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>Create</button>

        </form>
        )
    }
}

export default CreateProduct;
