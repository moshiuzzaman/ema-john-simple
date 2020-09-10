import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order Review</Link>
                <Link to="/manage">Manage Inventory here</Link>
            </nav>
        </div>
    );
};

export default Header;