import React from 'react' 
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import checkoutPageStyle from './checkoutpage.module.scss'
import { selectCartProducts, selectCartTotal } from '../../redux/cart/cart-selectors';

import FormButton from '../../components/form-button/form-button'
import CheckoutProduct from '../../components/checkout-product/checkout-product'

const CheckoutPage = ({cartProducts, total})=> {
     console.log("hi", cartProducts)
    
     return (
         <>
            <CheckoutProduct />
            <h1>CheckOut Page</h1>
                {
            cartProducts.map(product =>        
                < CheckoutProduct key={product.id} product={product} />
            )}
            <div>Total: $ {total}</div>
            <FormButton >Pay</FormButton>
        </>
     )     
}

const mapStateToProps = createStructuredSelector({
  cartProducts: selectCartProducts,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)

