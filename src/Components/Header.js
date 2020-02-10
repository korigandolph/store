import React from 'react';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';

const Header = () => (
    <div className='Header'>
        <Link to='/'>Home</Link>
        <Link to='/'>Products</Link>
        <Link to='/about'>About</Link>
        <Link to='/cart'><FaShoppingCart/></Link>
    </div>
)

export default Header; 