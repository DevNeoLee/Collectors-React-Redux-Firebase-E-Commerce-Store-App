import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { selectCartProductsCount } from '../../redux/cart/cart-selectors'

import cartHeaderStyle from './cart-header.module.scss'
import { GiShoppingCart } from 'react-icons/gi'

const CartHeader = ({ toggleHidden, productCount }) => {

    return (
        <div className={ cartHeaderStyle.container} onClick={toggleHidden}>
            <span className={ cartHeaderStyle.count}>{productCount}</span>
            <div className={ cartHeaderStyle.icon }><GiShoppingCart size={40}/></div>
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

