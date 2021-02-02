import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import backgroundImage from '../../icon.png'

import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { selectCartProductsCount } from '../../redux/cart/cart-selectors'

import cartHeaderStyle from './cart-header.module.scss'
import { GiShoppingCart } from 'react-icons/gi'

const CartHeader = ({ toggleHidden, productCount }) => {

    return (
            <div className={ cartHeaderStyle.container} onClick={toggleHidden}>
                <div className={ cartHeaderStyle.icon }><GiShoppingCart size={30}/></div>
                <div className={ cartHeaderStyle.countContainer}>
                    <img className={ cartHeaderStyle.image } src={backgroundImage}/>
                    <div className={ cartHeaderStyle.number}>{productCount}</div>
                </div>
                <p className={ cartHeaderStyle.cart}>Cart</p>
            </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleCartHidden())
 })

const mapStateToProps = createStructuredSelector({
    productCount: selectCartProductsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartHeader)

