import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action/index';  
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


function Product() {

    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(product);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addCart(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delCart(product));
            setCartBtn('Add to Cart')
        }
        
    }

    useEffect(async () => {

        setLoading(true);
        try {

            const { data: product } = await axios.get(`http://localhost:9999/api/products/${id}`);
            console.log(product.product);
    
            setProduct(product.product)
            setFilter(product.product);

        } catch(e) {
            console.error(e)

        }
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
                    <p className="lead" dangerouslySetInnerHTML={{__html: product.description}}></p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
                        {cartBtn}
                    </button>
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
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
