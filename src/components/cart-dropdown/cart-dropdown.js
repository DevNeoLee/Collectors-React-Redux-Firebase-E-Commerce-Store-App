import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import cartDropdownStyle from './cart-dropdown.module.scss';
import FormButton from '../form-button/form-button'
import CartItemHeader from '../cart-item-header/cart-item-header'
import { selectCartProducts } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions'

const CartDropdown = ({ cartProducts, history, dispatch }) => (
  <div className={cartDropdownStyle.main} >
      <h3>Dropdown Cart</h3>
        {
          cartProducts.map(product => 
            <CartItemHeader key={product.id} product={ product }/>)
        }
      <div className={cartDropdownStyle.button}>
        <FormButton onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden())
        }
        }>Go Pay</FormButton></div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartProducts: selectCartProducts,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
