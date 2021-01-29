
import React from 'react';
import { connect } from 'react-redux';

import checkoutProductStyle from './checkout-product.module.scss';

import { deleteProduct, addProduct, reduceQuantity } from '../../redux/cart/cart-actions';

const CheckoutProduct = ({ product, addProduct, deleteProduct, reduceQuantity }) => {
    if (product) {
        return  <>
                    <h3>{product.name}</h3>
                    <div>Price: ${product.price}</div>
                    <div onClick={() => reduceQuantity(product) }>&#x3c;</div>{product.quantity}<div onClick={() => addProduct(product)}>&#x3e;</div>
                    <img className={checkoutProductStyle.image} src={product.imageUrl} alt="img"/>
                    <p onClick={()=> deleteProduct(product) }>&#10005;</p>
                </>
    }
    else {
        return <div>hi</div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: product => dispatch(deleteProduct(product)),
    addProduct: product => dispatch(addProduct(product)),
    reduceQuantity: product => dispatch(reduceQuantity(product))
});

export default connect(null, mapDispatchToProps)(CheckoutProduct);
