import React from 'react';
import Products from './Products';
import {FaStar} from 'react-icons/fa';

const Home = ()=>(
    <div>
    <div>
        <img className='about-pic' src='https://i.pinimg.com/originals/e5/cd/e8/e5cde894c8cb88be75a5e7eff9ea7d81.png' alt='plants'/>
        <div className='about-words'>
        </div>
    </div>
        <Products/>
        <div className='cust-review'>
            <h2>What our customers are saying</h2>
            <p>"I love sending Bright Boxes to anyone who needs a little pick me up. They are so cute and so affordable and I love how there are always new boxes to send to others!"</p>
            <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
        </div>
        {/* <div className='bottom'>
            <h3 >SHOP</h3>
            <div className='item'>
                <p>Curated Box</p>
                <p>Custom Box</p>
                <p>Sale</p>
                <p>Search</p>
            </div>
            <h3>COMPANY</h3>
                <p>Our Story</p>
                <p>Shipping</p>
                <p>FAQ</p>
                <p>Contact Us</p>
        </div> */}
    </div>
)
export default Home;