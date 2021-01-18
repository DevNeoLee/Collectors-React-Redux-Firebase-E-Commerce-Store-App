import React from 'react'

import cartItemHeaderStyle from './cart-item-header.module.scss'

const CartItemHeader = ({ product: { imageUrl, price, name, quantity }}) => (
        <div className={cartItemHeaderStyle.item}> 
            <img src={imageUrl} alt=""/>
            <div className={cartItemHeaderStyle.detail}>
                <h4>{name}</h4>
                <p>{quantity} x ${price}</p>
            </div>
        </div>
)

export default CartItemHeader

