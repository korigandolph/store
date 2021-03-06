import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import AuthModal from './AuthModal';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';
import {FaShoppingBag} from 'react-icons/fa';
import Edit from './Edit';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            cart:[],
            amount: 0
        }
    }
    
    componentDidMount(){
        this.getProducts()
    }
    // componentDidUpdate(){
    //     this.getProducts()
    // }

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

    editProduct =(product, qty)=>{
        // console.log(id)
        console.log(product)
        axios.put(`/api/product/${product.order_item_id}`, {qty})
        .then(results=>{
            this.getProducts()
        }).catch(err=>console.log(err))
    }

    render(){
        // console.log(this.props)
        const mappedCart = this.state.cart.map((product, i) => {
            return (
                <Edit product={product} key={i} 
                editProduct={this.editProduct}
                deleteProduct={this.deleteProduct}/>
            )
        })
        return (
            <div className='product-flex'>

                {this.props.user && this.props.user.email
                ? (<div>
                    {mappedCart}
                    <hr></hr>
                    <div className='bottom-of-cart'>
                    <input 
                    placeholder='Discount Code'
                    />
                    <button>Apply</button>
                    <div className='total'>Subtotal: ${this.state.cart.reduce((total, element)=>{
                        return total + +element.price    
                    },0)}.00</div>
                    <Link to='/checkout'><FaShoppingBag/>Checkout</Link>
                    </div>
                    </div>)
                : (<AuthModal />)
                }
                
            </div>
        )
    }
}

const mapStateToProps = reduxState=> {
    const {user} = reduxState.userReducer
    return {user}

};
export default connect(mapStateToProps)(Cart);