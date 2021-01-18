import React from 'react'
import { connect } from 'react-redux'

import cartDropdownStyle from './cart-dropdown.module.scss';
import FormButton from '../form-button/form-button'
import CartItemHeader from '../cart-item-header/cart-item-header'

const CartDropdown = ({ cartProducts }) => (
  <div className={cartDropdownStyle.main} >
      <h3>Dropdown Cart</h3>
        {
          cartProducts.map(product => 
            <CartItemHeader key={product.id} product={ product }/>)
        }
      <div className={cartDropdownStyle.button}><FormButton >Go Pay</FormButton></div>
  </div>
);

const mapStateToProps = ({cart: { cartProducts}}) => ({
  cartProducts
})

export default connect(mapStateToProps)(CartDropdown);
