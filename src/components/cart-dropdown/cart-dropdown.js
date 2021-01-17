import React from 'react'
import cartDropdownStyle from './cart-dropdown.module.scss';
import FormButton from '../form-button/form-button'

const CartDropdown = () => (
  <div className={cartDropdownStyle.main} >
      <h3>Dropdown Cart</h3>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
         
        </ul>
      <div className={cartDropdownStyle.button}><FormButton >Go Pay</FormButton></div>
  </div>
);

export default CartDropdown;
