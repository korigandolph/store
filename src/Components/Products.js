import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import AuthModal from './AuthModal';
import swal from 'sweetalert';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            showModal: false
        }
    }
    componentDidMount(){
        axios.get('/api/products').then(res => {
            this.setState({products: res.data})
        }).catch(err => console.log(err));
    }

    addToCart = (id, price) => {
        if(this.props.user && this.props.user.email){
            axios.post('/api/cart', {
                customer_order_id: this.props.user.customer_order_id,
                product_id: id,
                price
            }).then(res => {
                swal({title: 'Added to Cart!', icon: 'success'})
            }).catch(err => console.log(err));
        } else {
            this.handleToggle()
        }
    }

    handleToggle = () => {
        this.setState({showModal: !this.state.showModal})
    }
    render(){
        const widthStyle ={
            width: 350
        }

        const mappedProducts = this.state.products.map((product, i) => {
            return (
               <div key={i} className='product-container' style={widthStyle}>
                   <img src={product.product_image} alt={product.product_name} className='product-image' style={widthStyle}/>
                    <h2>{product.product_name}</h2>
                    <p>{product.product_description}</p>
                    <p>${product.price}</p>
                    <button onClick={() => this.addToCart(product.product_id, product.price)}>Add to Cart</button>
               </div> 
            )
        })
        return (
            <div className='product-flex'>
                {mappedProducts}
                {this.state.showModal
                ? (<AuthModal toggleFn={this.handleToggle}/>)
                : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState=> {
    const {user} = reduxState.userReducer
    return {user}

};

export default connect(mapStateToProps)(Products);