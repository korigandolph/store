import React from 'react';
import {Link} from 'react-router-dom';
import {FaShoppingCart, FaSpa} from 'react-icons/fa';

const Header = () => (
    <div className='Header'>
        <Link to='/'><FaSpa /> Company</Link>
        <Link to='/products'>Products</Link>
        <Link to='/about'>About</Link>
        <Link to='/cart'><FaShoppingCart/></Link>
    </div>
)

export default Header; 