import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <nav>
            <NavLink className='page' activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink className='page' activeStyle={activeStyle} to="/friends">Friends</NavLink>
            <NavLink className='page' activeStyle={activeStyle} to="/about">About</NavLink>
            <NavLink className='page' activeStyle={activeStyle} to="/about/culture">Culture</NavLink>
        </nav>
    );
};

export default Header;