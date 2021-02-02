
import React from 'react';
import { connect } from 'react-redux';

import checkoutProductStyle from './checkout-product.module.scss';

import { deleteProduct, addProduct, reduceQuantity } from '../../redux/cart/cart-actions';

const CheckoutProduct = ({ product, addProduct, deleteProduct, reduceQuantity }) => {
    if (product) {
        return  (<div className={checkoutProductStyle.container}>
                    <div className={checkoutProductStyle.checkoutProduct}>
                        <img className={checkoutProductStyle.image} src={product.imageUrl} alt="img"/>
                        <div className={checkoutProductStyle.detail}>
                            <div className={checkoutProductStyle.titlePrice}>
                                <h2>{product.name}</h2>
                                <div className={checkoutProductStyle.price}><div className={checkoutProductStyle.priceText}>Price: </div>${product.price}</div>
                            </div>
                            <div className={checkoutProductStyle.quantity}>
                                <div onClick={() => reduceQuantity(product) }>&#x3c;</div>{product.quantity}<div onClick={() => addProduct(product)}>&#x3e;</div>
                                <p onClick={()=> deleteProduct(product) }>&#10005;</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
      
    )}
}

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: product => dispatch(deleteProduct(product)),
    addProduct: product => dispatch(addProduct(product)),
    reduceQuantity: product => dispatch(reduceQuantity(product))
});

export default connect(null, mapDispatchToProps)(CheckoutProduct);
