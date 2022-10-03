import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="Logo" />
            <div>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/invrntoruy">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;