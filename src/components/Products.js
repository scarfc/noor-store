import { Container } from '@material-ui/core';
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';



function Products() {

    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(async () => {

            setLoading(true);
            const { data: products } = await axios.get('http://localhost:9999/api/products');
            console.log('111', products.products);
        
            setProducts(products.products)
            setFilter(products.products);
            setLoading(false);

    }, []);

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        );
    };
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark">All</button>
                    <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Jewelery</button>
                    <button className="btn btn-outline-dark me-2">Electronics</button>
                </div>


                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3">
                                <div class="card">
                                    <img src={product.imageUrl} class="card-img-top" alt={product.name}/>
                                        <div class="card-body">
                                            <h5 class="card-title">{product.name}</h5>
                                            <p class="card-text">
                                                ${product.price}
                                            </p>
                                            <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );

    };
    return (
        <div>
            <Container>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Products
