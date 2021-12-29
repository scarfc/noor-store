import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(product);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(async () => {

        setLoading(true);
        const { data: product } = await axios.get(`http://localhost:9999/api/products/${id}`);
        console.log(product.product);

        setProduct(product.product)
        setFilter(product.product);
        setLoading(false);

    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>

                <div className="col-md-6">
                    <img src={product.imageUrl} alt={product.name}
                        height="500px" width="500px" />
                </div>
                <div className="col-md-6">
                    <h1 className="display-5">{product.name}</h1>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
                        Add to Cart
                    </button>
                    <NavLink to="#" className="btn btn-outline-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>

                
            </>
        )
    }


    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product
