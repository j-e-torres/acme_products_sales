import React from 'react';

const List = ({ products, deleteProduct }) => {
    return (
        <div>
            <ul className="list-group">
                {
                    products.map( product => {
                        return (
                            <li key={product.id} className="list-group-item">
                                {product.name}
                                <br></br>
                                ${product.price}
                                <br></br>
                                {product.availability}
                                <br></br>
                                <div>
                                <button type="button" onClick={() => deleteProduct(product.id) } className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default List;
