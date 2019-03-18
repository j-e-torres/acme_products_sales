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
    }

    handleChange ({ target }){
        this.setState({[target.name]: target.value})
    }

    onSubmit (e) {
        e.preventDefault();

    }

    render() {
        console.log(this.state);
        const { handleChange, onSubmit} = this
        const { name, price, discountPercent, availability, err } = this.state;

        return (
        <form onSubmit={onSubmit}>
          <label htmlFor="name"> Name </label>
          <input className="form-control" name="name" type="text"  onChange={handleChange} />

          <label htmlFor="price"> Price </label>
          <input className="form-control" name="price" type="text" onChange={handleChange} />

          <button type="submit"> Submit</button>

        </form>
        )
    }
}

export default CreateProduct;
