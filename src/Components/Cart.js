import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import AuthModal from './AuthModal';
import swal from 'sweetalert';
// import Product from './Product'

class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            cart:[]
        }
    }

    componentDidMount(){
        this.getProducts()
    }

    getProducts=()=>{
        axios.get(`/api/cart/${this.props.user.customer_order_id}`)
        .then(res=>this.setState({cart: res.data}))
        .catch(err=>console.log(err));
    }

    deleteProduct =(id)=>{
        console.log(id)
        axios.delete (`/api/product/${id}`)
        .then(results=> {
          this.getProducts()
          this.setState({cart: results.data})
          swal({title: 'Removed from Cart!'})
        }).catch(err=>console.log(err))
      }

    render(){
        const mappedCart = this.state.cart.map((product, i) => {
            // console.log(product.order_item_id)
            return (
               <div key={i} className='product-container'>
                   <img src={product.product_image} alt={product.product_name} className='product-image'/>
                    <p>{product.product_name}</p>
                    <p>${product.price}</p>
                    <p>qty: {product.qty}</p>
                    <button onClick={() => this.deleteProduct(product.order_item_id)}>Delete</button>
               </div> 
            )
        })
        return (
            <div className='product-flex'>
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