
import React from 'react'
import { connect } from 'react-redux'

import checkoutProductStyle from './checkout-product.module.scss'

import { deleteProduct } from '../../redux/cart/cart-actions'

const CheckoutProduct = ({ product, deleteProduct }) => {
    if (product) {
        return  <>
                    <h3>{product.name}</h3>
                    <div>Price: ${product.price}</div>
                    <p>{product.quantity}</p>
                    <img className={checkoutProductStyle.image} src={product.imageUrl} alt="img"/>
                    <p onClick={()=> deleteProduct(product) }>&#10005;</p>
                </>
    }
    else {
        return <div></div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (product) => dispatch(deleteProduct(product))
})

export default connect(null, mapDispatchToProps)(CheckoutProduct);
