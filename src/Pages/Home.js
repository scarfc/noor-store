import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Product from '../components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = () => {
    return (
        <Router>
            <div>
                <Announcement />
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Products/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/products/:id" element={<Product/>} />
                    <Route path="/slider" element={<Slider/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default Home
