import React from 'react' 
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import checkOutPageStyle from './checkoutpage.module.scss'
import { selectCartProducts, selectCartTotal } from '../../redux/cart/cart-selectors';

import FormButton from '../../components/form-button/form-button'


const CheckoutPage = ({cartProducts, total})=> {
     console.log(cartProducts)
    
     return (
         <>
            <div>check out</div>
                {
            cartProducts.map(product => 
                <>
                    <div key={product.id}>{product.id}</div>
                    <div> {product.name}</div>
                    <img className={checkOutPageStyle.image} src={product.imageUrl} alt="product image"/>
                </>
                )
            }
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

