import React from 'react';
import Products from './Products';
import {FaStar} from 'react-icons/fa';

const reviewStyle ={
    color: 'white',
    fontSize: 'larger',
    padding: 15
}

const boxStyle ={
    fontSize: 'larger',
    paddingBottom: 25
}

const sizeStyle={
    fontSize: 50
}

const Home = ()=>(
    <div>
    <div>
        <img className='about-pic' src='https://i.pinimg.com/originals/e5/cd/e8/e5cde894c8cb88be75a5e7eff9ea7d81.png' alt='plants'/>
        <div className='about-words'>
        </div>
    </div>
        <Products/>
        <div className='shipping'>
        <h3 style={sizeStyle}>FREE SHIPPING TO THE US</h3>
        <h3>All product prices include shipping price to the United States. For international shipping, please contact BrightBoxes customer support</h3>
        </div>
        <div>
            <img className='circle' src='https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw143df6fb/images/finished-goods/Natural-Life-Beautiful-Girl-Happy-Box-Gift-Set-6-Pieces-root-HAPPYBOX016_HAPPYBOX016_01.jpg_Source_Image.jpg?sw=1024' alt='box'/>
            <h2>Simple</h2>
            <img className='circle' src ='https://cdn.shopify.com/s/files/1/0853/6762/products/besties_cd5844ae-88c9-4ab6-9f2a-858ebc26ee1c_1024x1024.jpg?v=1515857902' alt='box'/>
            <h2>Affordable</h2>
            <img className='circle' src='https://cdn.shopify.com/s/files/1/2504/0212/products/Birthday_Box_3_1600x.jpg?v=1571609947' alt ='box'/>
            <h2>Custom</h2>
        </div>
        <div className='cust-review' style={reviewStyle} >
            <h1>What our customers are saying</h1>
            <p>"I love sending Bright Boxes to anyone who needs a little pick me up. They are so cute and so affordable and I love how there are always new boxes to send to others!"</p>
            <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <hr></hr>
            <p>
                "The customer service is so great and so helpful. I was able to customize my box before sending it and made it perfect for the recipient."
            </p>
            <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <hr></hr>
            <p>
                "BrightBoxes allows me to show someone how much I care about them even when I don't have the time. It is so convienient and doesn't break the bank."
            </p>
            <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
        </div>
        <div style={boxStyle}>
            <h1>Brighten Someone's Day</h1>
            <button className='boxButton'>Send A Box</button>
        </div>
    </div>
)
export default Home;