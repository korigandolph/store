import React, {Component} from 'react';
import {FaInstagram, FaFacebookSquare} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

class Footer extends Component{
    constructor(props){
        super(props)

        this.state={
            id: 0,
            email: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({name, value}){
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className='footer'>
                <h3>S U B S C R I B E</h3>
                <input 
                name='email'
                value={this.state.email}
                type='text'
                placeholder='Enter Email Address'
                onChange={(e) => this.handleChange(e.target)}
                />
                <button className='button' onClick={console.log(this.state.email)}>submit</button>
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