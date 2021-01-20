
import React from 'react';
import { connect } from 'react-redux';

import checkoutProductStyle from './checkout-product.module.scss';

import { deleteProduct, increaseQuantity } from '../../redux/cart/cart-actions';

const CheckoutProduct = ({ product, deleteProduct, increaseQuantity }) => {
    if (product) {
        return  <>
                    <h3>{product.name}</h3>
                    <div>Price: ${product.price}</div>
                    <div>hmmmm</div>{product.quantity}<div onClick={() => alert('hello')}>this is it</div>
                    <img className={checkoutProductStyle.image} src={product.imageUrl} alt="img"/>
                    <p onClick={()=> deleteProduct(product) }>&#10005;</p>
                </>
    }
    else {
        return <div>hi</div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (product) => dispatch(deleteProduct(product)),
    increaseQuantity: product => dispatch(increaseQuantity(product))
});

export default connect(null, mapDispatchToProps)(CheckoutProduct);
