import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Checkout extends Component {
    constructor(){
        super()
        this.state ={
            amount: 30
        }
    }

    onOpened=()=>{
        console.log('this is opened')
      }
    
      onClosed=()=>{
        console.log('this is closed')
      }

    onToken = (token) => {
        console.log(token)
        let { amount } = this.state
        amount /= 100
        console.log(amount)
        token.card = void 0
        axios.post('/api/payment', { token, amount: this.state.amount }).then(res => {
          console.log(res)
          alert(`Your payment of ${amount} ran successfully!`)
        })
      }

    render(){
        return (
            <div>
                <h2>Order Summary: </h2>
                <h2>Total Price: ${this.state.amount}.00</h2>
                <StripeCheckout
                value={this.state.amount}
                    name='Payment' 
                    stripeKey='pk_test_rdhhmxPNYEBLTjs16yxB4p3L00KlEM6hsI'
                    token={this.onToken}
                    amount={this.state.amount*100}
                    currency="USD" 
                    panelLabel="Submit Payment"
                    locale="en" 
                    opened={this.onOpened}
                    closed={this.onClosed}
                    allowRememberMe 
                    billingAddress={false}
                    zipCode={false}
                    >
                </StripeCheckout>
            </div>
        )
    }
}
export default Checkout