import cartActionTypes  from './cart-types';
import { addProductToCart, increaseQuantity } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartProducts: []
};

const cartReducer = (state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_PRODUCT:
            return {
                ...state,
                cartProducts: addProductToCart(state.cartProducts, action.payload)
            }
        case cartActionTypes.DELETE_PRODUCT:
            return {
                ...state,
                cartProducts: state.cartProducts.filter((product) => product.id !== action.payload.id)
            }
        case cartActionTypes.INCREASE_QUANTITY:
            return {
                ...state,
               cartProducts: increaseQuantity(state.cartProducts, action.payload)
            }
        default:
            return state;
    };
};

export default cartReducer; 