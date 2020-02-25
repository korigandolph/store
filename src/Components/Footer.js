import React, {useState} from 'react';
import {FaInstagram, FaFacebookSquare} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {getEmail} from '../redux/reducer';
import {connect} from 'react-redux';

const Footer = props => {
    const [emailInput, setEmailInput]= useState('');

const footerStyle={
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: '1em',
    color: 'black',
    justifyContent: 'center',
    padding: 20
}
    
        return(
            <div className='footer' style={footerStyle}>
                <h3 className='subscribe'>S U B S C R I B E</h3>
                <input 
                name='email'
                value={emailInput}
                type='text'
                placeholder='Enter Email Address'
                onChange={(e) => setEmailInput(e.target.value)}
                />
                <button className='button' onClick={console.log(emailInput)}>submit</button>
                <div className='Footer'>
                    <h2><FaInstagram/> </h2>
                    <h2> <FaTwitter/></h2>
                    <h2><FaFacebookSquare/></h2>
                </div>
            </div>
        )
    }

    export default connect(null, {getEmail})(Footer); 