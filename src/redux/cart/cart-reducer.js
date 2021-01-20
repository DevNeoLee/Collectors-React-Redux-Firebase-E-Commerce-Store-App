import cartActionTypes  from './cart-types'
import { addProductToCart } from './cart-utils'

const INITIAL_STATE = {
    hidden: true,
    cartProducts: []
}

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
        default:
            return state;
    }
}

export default cartReducer; 