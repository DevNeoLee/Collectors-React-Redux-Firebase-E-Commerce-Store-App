import cartActionTypes from './cart-types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addProduct = (product) => ({
    type: cartActionTypes.ADD_PRODUCT,
    payload: product
});

export const deleteProduct = (product) => ({
    type: cartActionTypes.DELETE_PRODUCT,
    payload: product
});

export const increaseQuantity = (product) => ({
    type: cartActionTypes.INCREASE_QUANTITY,
    payload: product
});