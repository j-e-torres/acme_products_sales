import React from 'react';

const List = ({ products, deleteProduct }) => {
    return (
        <div>
            <ul className="list-group">
                {
                    products.map( product => {
                        if (product.discountPercent) {
                            return (
                                <li key={product.id} className="list-group-item">
                                    {product.name}
                                    <br></br>

                                    <span style={{ textDecoration: 'line-through' }}>${product.price}</span>
                                    <br></br>

                                    <span className="badge  badge-success" style={{ marginBottom: '5px' }}>{product.price * ((100 - product.discountPercent) / 100)}</span>
                                    <br></br>

                                    <div style={{ marginBottom: '5px' }}>{product.availability}</div>

                                    <div>
                                    <button type="button" onClick={() => deleteProduct(product.id) } className="btn btn-danger btn-sm">Delete</button>
                                    </div>
                                </li>
                            )
                        }
                        else {
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
                        }

                    })
                }
            </ul>
        </div>
    )
}


export default List;
