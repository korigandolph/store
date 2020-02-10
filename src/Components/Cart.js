import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import AuthModal from './AuthModal'

class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            cart:[]
        }
    }

    componentDidMount(){
        axios.get(`/api/cart/${this.props.user.customer_order_id}`)
        .then(res=>this.setState({cart: res.data}))
        .catch(err=>console.log(err));
    }

    render(){
        const mappedCart = this.state.cart.map((product, i) => {
            return (
               <div key={i} className='product-container'>
                   <img src={product.product_image} alt={product.product_name} className='product-image'/>
                    <p>{product.product_name}</p>
                    <p>{product.product_description}</p>
                    <p>${product.price}</p>
               </div> 
            )
        })
        return (
            <div>
                {this.props.user.email
                ? (<div>{mappedCart}</div>)
                : (<AuthModal />)
                }
            </div>
        )
    }
}

const mapStateToProps = reduxState=> reduxState;

export default connect(mapStateToProps)(Cart);