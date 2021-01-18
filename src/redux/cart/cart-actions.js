import cartActionTypes from './cart-types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addProduct = (product) => ({
    type: cartActionTypes.ADD_PRODUCT,
    payload: product
})