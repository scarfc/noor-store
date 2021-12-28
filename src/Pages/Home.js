import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Home = () => {
    return (
        <Router>
        <div>
            <Announcement/>
            <Navbar/>
            <Products />
            <Slider/>
        </div>
        </Router>
    )
}

export default Home
 