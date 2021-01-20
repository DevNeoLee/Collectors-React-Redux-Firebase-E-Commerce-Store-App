
import React from 'react'

import checkoutProductStyle from './checkout-product.module.scss'

const CheckoutProduct = ({ product }) => {
    if (product) {
        return  <>
                    <h3>{product.name}</h3>
                    <div>Price: ${product.price}</div>
                    <img className={checkoutProductStyle.image} src={product.imageUrl} alt="img"/>
                </>
    }
    else {
        return <div></div>
    }
}

    

export default CheckoutProduct;
