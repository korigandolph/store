import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';


class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            showDropDown: false
        }
    }

    toggleDropdown=()=>{
        this.setState({showDropdown: !this.state.showDropdown})
    }
    render(){
        return(
            <header>
                <nav id='desktop-nav' className='Header'>
                    <Link to='/'>BEAUTYBOX</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/cart'><FaShoppingCart/></Link> 
                </nav>
                <nav id='mobile-nav' onClick={this.toggleDropdown} className='mobile-header'>
                BEAUTYBOX
            </nav>
            {this.state.showDropdown ?
            (<div id='dropdown'>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About</Link>
                <Link to='/cart'>Cart</Link> 
            </div>)
            : null}
            </header>
        )
    }
}


export default Header; 