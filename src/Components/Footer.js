import React, {Component} from 'react';
import {FaInstagram, FaFacebookSquare} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

class Footer extends Component{

    handleChange({name, value}){
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className='form'>
                <h3>S U B S C R I B E</h3>
                <input 
                name='email'
                type='text'
                placeholder='Enter Email Address'
                onChange={(e) => this.handleChange(e.target)}
                />
                <button className='button'>submit</button>
                <div className='Footer'>
                    <h2><FaInstagram/> </h2>
                    <h2> <FaTwitter/></h2>
                    <h2><FaFacebookSquare/></h2>
                </div>
            </div>
        )
    }
}

export default Footer; 