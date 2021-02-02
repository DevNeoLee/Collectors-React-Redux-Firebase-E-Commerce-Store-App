import React from 'react'

import cartItemHeaderStyle from './cart-item-header.module.scss'

const CartItemHeader = ({ product: { imageUrl, price, name, quantity }}) => (
        <>
        <div className={cartItemHeaderStyle.container}> 
            <img src={imageUrl} alt="counter background" className={cartItemHeaderStyle.image}/>
            <div className={cartItemHeaderStyle.detail}>
                <p className={cartItemHeaderStyle.name}>{name.length > 50? name.slice(0, 50) + '...': name}</p>
                <p className={cartItemHeaderStyle.price}>${price} x {quantity} </p>
            </div>
        </div>
        <hr className={cartItemHeaderStyle.hr}/>
        </>
        
)

export default CartItemHeader

