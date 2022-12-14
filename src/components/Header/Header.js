import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <Link to={"/"}><img src={logo} alt="" /></Link>
            <div>
                <Link to={"/"}></Link>
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/order"}>Order</Link>
                <Link to={'/inventory'}>Inventory</Link>
                <Link to={'/about'}>About</Link>
                {/* <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a> */}
            </div>
        </nav>
    );
};

export default Header;