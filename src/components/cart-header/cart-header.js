import React from 'react'
import { connect } from 'react-redux'

import  toggleCartHidden from '../../redux/cart/cart-actions'

import cartHeaderStyle from './cart-header.module.scss'
import { GiShoppingCart } from 'react-icons/gi'

const CartHeader = ({ toggleHidden }) => {

    return (
        <div className={ cartHeaderStyle.container} onClick={toggleHidden}>
            <span className={ cartHeaderStyle.count}>0</span>
            <div className={ cartHeaderStyle.icon }><GiShoppingCart size={40}/></div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleCartHidden())
 })

export default connect(null, mapDispatchToProps)(CartHeader)

