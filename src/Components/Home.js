import React from 'react';
// import About from './About';
import Products from './Products';

const Home = ()=>(
    <div>
    <div>
        <img className='about-pic' src='https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60' alt='plants'/>
        <div className='about-words'>
            <h1>Welcome to BEAUTYBOX</h1>
        </div>
    </div>
        <Products/>
    </div>
)
export default Home;