import React from 'react' 
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import checkoutPageStyle from './checkoutpage.module.scss'
import { selectCartProducts, selectCartTotal } from '../../redux/cart/cart-selectors';

import CheckoutProduct from '../../components/checkout-product/checkout-product'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const CheckoutPage = ({cartProducts, total})=> {
     console.log("hi", cartProducts);
    
     return (
         <>
            <CheckoutProduct />
            <h1>CheckOut Page</h1>
                {
            cartProducts.map(product =>        
                < CheckoutProduct key={product.id} product={product} />
            )}
            <div>Total: $ {total}</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
            <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <StripeCheckoutButton price={total} />
        </>
     );   
};

const mapStateToProps = createStructuredSelector({
  cartProducts: selectCartProducts,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage)

