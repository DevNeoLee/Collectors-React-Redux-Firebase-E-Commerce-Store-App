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
      <div className={cartDropdownStyle.header}>
        <h3>Shopping Cart</h3>
        <div className={cartDropdownStyle.close} onClick={()=>dispatch(toggleCartHidden())}>X</div>
      </div>
      <hr/> 
      <div className={cartDropdownStyle.body}>
         { cartProducts.length ? (
            cartProducts.map(product => 
            <CartItemHeader key={product.id} product={ product } />) )
            : (<div className={cartDropdownStyle.empty}>Cart is empty</div>)
        }
      </div>  
      <div className={cartDropdownStyle.button}>
        <FormButton onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden())
        }
        }>Go Pay</FormButton>
      </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartProducts: selectCartProducts,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
